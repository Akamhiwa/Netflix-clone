import React, { useEffect, useState } from 'react'
import Row from './assets/Row'
import Header from './assets/Header'
import request from './request.js'
import Nav from './assets/Nav'
import ShowModal from "./assets/ShowModal.jsx"
const App = () => {
  const API_KEY="b19e07280e40f03edff04ffcaa43e707"
  const[modal,setIsModal]=useState(false)
  const [Query,setQuery]=useState("")
  const openPopUp=()=>{
    setIsModal(!modal)
  }
  const DeletePopUp=()=>{
    setIsModal(false)
  }
  
  
  
  return (
    <div className='bg-black z-30' >
        <Nav onOpen={openPopUp}/>
        <Header fetchUrl={request.fetchTrending} />
          {modal &&(
            <ShowModal 
            modal={modal} 
            onDelete={DeletePopUp}
            setQuery={setQuery} 
            />
          )}
      
        <div className='pb-16'>
          {!modal&&Query &&(
               <Row 
               title="Searched Movies" 
               fetchUrl={`/search/movie?api_key=${API_KEY}&query=${Query}`} 
               Id={0}
                />
          )}
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} Id={1} />
            <Row title="trending now" fetchUrl={request.fetchTrending} Id={2}/>
            <Row title="Upcoming movies" fetchUrl={request.fetchUpcomingMovies} Id={3}/>
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} Id={4}/>
            <Row title="Action movies" fetchUrl={request.fetchActionMovies} Id={5}/>
            <Row title="Comedy movies" fetchUrl={request.fetchComedyMovies} Id={6}/>
            <Row title="Horror movies" fetchUrl={request.fetchHorrorMovies} Id={7}/>
        </div>
     </div>
  )
}

export default App