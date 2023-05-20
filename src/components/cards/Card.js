import YouTube from 'react-youtube';
import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import { apiKey } from '../../constants/constant'
import { imgUrl } from '../../constants/constant'
import './Card.css'

function Card(props) {
  const [row,setRow] = useState([])
  const [url,setUrl] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      //console.log(response.data)
      setRow(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',                
    playerVars: {
      autoplay: 0,
    },
  };
  const handleVideo = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length !== 0){
      setUrl(response.data.results[0])
      }else{
        console.log('array empty');
      }
    })
  }
  return (
    <div className='row'>
      <h1 className="title">{props.title}</h1>
      <div className="cards">
        {row.map((obj)=>
        <img onClick={()=>handleVideo(obj.id)} className={props.isSmall?'small-card-image':'card-image'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
        )}
      </div>
      <div className='col-md-12' style={{margin:40}}>
      {url?<YouTube videoId={url.key} opts={opts} />:""}
      </div>    
      </div>
  )
}

export default Card
