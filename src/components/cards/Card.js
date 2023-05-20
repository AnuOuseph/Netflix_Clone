
import React,{useEffect, useState} from 'react'
import axios from '../../axios'
//import { apiKey } from '../../constants/constant'
import { imgUrl } from '../../constants/constant'
import './Card.css'

function Card(props) {
  const [row,setRow] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setRow(response.data.results)
    })
  })
  return (
    <div className='row'>
      <h1 className="title">{props.title}</h1>
      <div className="cards">
        {row.map((obj)=>
        <img className={props.isSmall?'small-card-image':'card-image'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
        )}
      </div>
    </div>
  )
}

export default Card
