import React,{useState,useEffect,useRef} from 'react'
import axios from '../axios'

function Header({fetchUrl,children}) {
  const ImageBaseUrl="https://image.tmdb.org/t/p/original/";
  const [movies,setMovies]=useState([])
  const RandomMovie=movies[Math.floor(Math.random()*movies.length)]

  useEffect(()=>{
      const fetchData=async()=>{
         try {
          const resp=await axios.get(fetchUrl)
          console.log(resp?.data.results);
          setMovies(resp?.data.results)
         } catch (error) {
          console.log(error);
         }
          
      }
      
      fetchData()

  },[])
 
  const truncate=(str,num)=>{
    if(str?.length>num){
      return str.slice(0,num) + '...';
    }
    else{
      return str
    }
  } 
  
  
  return (
    <>
     <div className=' w-full h-[550px] md:h-[600px] text-white '>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] md:h-[600px] bg-gradient-to-tr from-black'></div>
          <img src={`${ImageBaseUrl}${RandomMovie?.backdrop_path}`} alt={RandomMovie?.name} className='h-full w-full object-cover ' />
          <div className='absolute top-[20%] md:top-[25%] py-4 px-7 md:py-8 '>
                <h1 className='text-3xl md:text-5xl font-bold py-2'>{RandomMovie?.title || RandomMovie?.name}</h1>
                <p className='text-gray-100 xl:max-w-[40%] lg:max-w-[50%] md:max-w-[70%]'>{ truncate(RandomMovie?.overview ,200)}</p>
                <p className='text-gray-400  text-small pt-0.5'>Released {RandomMovie?.release_date || RandomMovie?.first_air_date}</p>
                <div className=' my-4'>
                  <button className='text-black py-2 px-6 border-gray-300 bg-gray-300 border'>play</button>
                  <button className='text-white border border-gray-300 py-2 px-6 ml-4'>Watch trailer</button>
                </div>
          </div>
      </div>
    </div>
    { children}
    </>
   
   

  )
}

export default Header