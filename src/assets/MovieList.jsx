import React from 'react'

const MovieList = ({movie,index}) => {
    const ImageBaseUrl="https://image.tmdb.org/t/p/w500/";
  return (
    movie.backdrop_path && (
        
        <div key={index} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-flex cursor-pointer  relative p-2'>
          <img src={`${ImageBaseUrl}${movie?.backdrop_path}`} alt={movie?.name} className='w-full h-auto block' />
          <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100
            flex items-center justify-center  text-white '>
            <div className='flex items-center justify-center '>
            <h3 className={(movie?.title?.length || movie?.name?.length) > 20 ? 'md:text-base text-sm w-[80%] whitespace-pre-line' : 'md:text-lg'}>{movie?.title || movie?.name}</h3>
  
            </div>
            
          </div>
        </div>
        
      )
   
  )
}

export default MovieList