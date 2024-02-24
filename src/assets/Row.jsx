import React, { useState,useEffect } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from '../axios'
import MovieList from './MovieList';
const Row = ({title,fetchUrl,Id}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
           try {
            const resp=await axios.get(fetchUrl)
            setMovies(resp.data.results)
           } catch (error) {
            console.log(error);
           }
        }
        fetchData()
    },[])

    const scrollLeft=(iD)=>{
      const slider=document.getElementById("slider"+iD)
      slider.scrollLeft-=300
    }
    const scrollRight=(iD)=>{
      const slider=document.getElementById("slider"+iD)
      slider.scrollLeft+=300
    }
  return (
    <div className='px-7'>
      <h2 className='text-white font-bold md:text-2xl pt-6 pb-1'>{title}</h2>
      <div className='relative '>
        <ChevronLeftIcon   fontSize='55' className='absolute top-[35%] z-10 cursor-pointer text-black p-1 rounded-full text-2xl md:text-4xl bg-white ' onClick={()=>{
          scrollLeft(Id)
        }}/>
        <div  id={`slider`+Id} className='w-full h-full overflow-x-scroll scroll-smooth  scrollbar relative  whitespace-nowrap '>
        {
            movies.map((movie, index) => (
              <MovieList movie={movie} key={index}/>
            ))
          }
        </div>
        <ChevronRightIcon   fontSize='50' className='absolute right-0 top-[35%] z-10 text-black p-1 rounded-full text-2xl md:text-4xl bg-white cursor-pointer' onClick={()=>{
          scrollRight(Id)
        }}/>
      </div>
   
    </div>
   
  )
}

export default Row