import React, { useEffect, useState } from 'react'
import Row from './assets/Row'
import Header from './assets/Header'
import request from './request.js'
import Nav from './assets/Nav'
import ShowModal from "./assets/ShowModal.jsx"
const App = () => {
  const[modal,setIsModal]=useState(false)
  
  const openPopUp=()=>{
    setIsModal(!modal)
  }
  const DeletePopUp=()=>{
    setIsModal(false)
  }
  useEffect(()=>{
    if(modal){
      document.body.classList.add('modal-active')
     
    }
    else{
      document.body.classList.remove('modal-active')
    }
  },[modal])
  
  return (
    <div className='bg-black z-30' >
      <Nav onOpen={openPopUp}/>
      <Header fetchUrl={request.fetchNetflixOriginals} >
        {modal &&(
          <ShowModal modal={modal} onDelete={DeletePopUp}/>
        )}
      </Header>
      <div className='pb-16'>
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