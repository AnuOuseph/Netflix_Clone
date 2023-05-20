import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {apiKey} from '../../constants/constant'
import { imgUrl } from '../../constants/constant'

function Banner() {       
  const [movie,setMovie] = useState()                                         
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
     //console.log(response.data.results[1]);
      setMovie(response.data.results[1])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path:""})`}}
     className='banner'>
      <div className="content">
        <h1 className="name">
            {movie?movie.title:""}
        </h1>
        <div className="buttons">
            <button className='button'>Play</button>
            <button className='button'>+ My List</button>
        </div>
        <h1 className="description">
          {movie?movie.overview:""}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
