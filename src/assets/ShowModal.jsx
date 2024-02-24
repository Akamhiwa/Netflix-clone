import React, { useEffect, useState ,useRef} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import axios from '../axios'
const Modal = ({modal,onDelete}) => {
  const API_KEY="b19e07280e40f03edff04ffcaa43e707"
  const [input,setInput]=useState("")
  const inputEl=useRef(null)
  
  useEffect(()=>{
    if(modal){
      
    }
  },[modal])
  const handleSubmit=()=>{
    setInput("")
  }
  const handleChange=(e)=>{
    const {value}=e.target
    setInput(value)
  }
  const HandleForm=(e)=>{
    e.preventDefault()
    handleSubmit()
    onDelete()

  }
  useEffect(()=>{
    try {
      const SearchMovie=async()=>{
        if(input.length<3) return;
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${input}`)
        console.log(response?.data);
      }
      SearchMovie()
      
    } catch (error) {
      console.log(error);
    }
    
  },[input])
  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
              <div className='w-full h-full fixed top-0 left-0  bg-black/75' onClick={onDelete}></div>
              <div className='fixed h-14 md:h-20 px-12 md:px-[60px] lg:px-[120px]  top-[15%] w-full   ' >
                      <form  className='flex items-center z-10 justify-between rounded-md  h-full w-[100%] mx-auto md:w-full bg-white md:px-16 px-4  ' onSubmit={HandleForm} >
                        <input 
                        type="text" 
                        placeholder='search for a movie' 
                        ref={inputEl} 
                         className=' w-full h-12 outline-0 text-black md:text-xl text-lg' 
                         onChange={handleChange}
                          />
                        <ClearIcon fontSize='medium' className='cursor-pointer text-black' onClick={onDelete}/>
                    </form>
                  </div>
            </div>
  )
}

export default Modal