
import './App.css';
import Banner from './components/banner/Banner';
import Card from './components/cards/Card';
import { originals,action,comedy,romance,horror,documentary } from './urls';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Card url={originals} title='Netflix Originals'/>
      <Card url={action} title='Action' isSmall/>
      <Card url={comedy} title='Comedy' isSmall/>
      <Card url={horror} title='Horror' isSmall/>
      <Card url={romance} title='Romance' isSmall/>
      <Card url={documentary} title='Documentary' isSmall/>
    </div>
  );
}

export default App;

