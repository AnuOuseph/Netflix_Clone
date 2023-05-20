import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {apiKey} from '../../constants/constant'
import { imgUrl } from '../../constants/constant'
import YouTube from 'react-youtube';

function Banner() {       
  const [movie,setMovie] = useState()
  const [bannerUrl,setBannerUrl] = useState('')                                         
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
     //console.log(response.data.results[1]);
      setMovie(response.data.results[randomIndex])
    })
  },[])
  const loadVideo = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data.results.length !== 0){
      setBannerUrl(response.data.results[0])
      }else{
        console.log('array empty');
      }
    })
  }
  const opt = {
    height: '390',
    width: '100%',                
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
    <div style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path:""})`}}
     className='banner'>
      <div className="content">
        <h1 className="name">
            {movie?movie.title:""}
        </h1>
        <div className="buttons">
            <button className='button' onClick={()=>loadVideo(movie?movie.id:"")}>Play</button>
            <button className='button'>+ My List</button>
        </div>
        <h1 className="description">
          {movie?movie.overview:""}
        </h1>
      </div>
      <div className="fade"></div> 
    </div>
    <div className='col-md-12' style={{margin:40}}>
    {bannerUrl?<YouTube opts={opt} videoId={bannerUrl.key}/>:""}
    </div>
    </>
  )
}

export default Banner
