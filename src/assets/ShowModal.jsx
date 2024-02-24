import React, { useEffect, useState ,useRef} from 'react'
import ClearIcon from '@mui/icons-material/Clear';
const Modal = ({modal,onDelete,setQuery}) => {
  const inputEl=useRef(null)
  const [input,setInput]=useState("")
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") { 
        console.log("Esc key pressed...");
        onDelete();
      }
    };
  
    if (modal) {
      inputEl.current.focus();
      document.body.classList.add('modal-active')
      document.addEventListener("keydown", handleKey);
    } else {
      document.body.classList.remove('modal-active')
      document.removeEventListener("keydown", handleKey);
    }
  
    
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove('modal-active')
    };
  }, [modal, onDelete]); 
  
  

  const handleChange=(e)=>{
    const {value}=e.target
    setInput(value)
  }
  
  const HandleSubmit=(e)=>{
    e.preventDefault()
    if(input.length<4) return;
    setQuery('')
    setQuery(input)
    setInput("")
    onDelete()
  }
  return (
    <div className='w-screen h-screen fixed top-0 left-0 z-10'>
              <div className='w-full h-full fixed top-0 left-0  bg-black/75' onClick={onDelete}></div>
              <div className='fixed h-14 md:h-20 px-12 md:px-[60px] lg:px-[120px]  top-[15%] w-full'>
                      <form  className='flex items-center z-20 justify-between rounded-md  h-full w-[100%] mx-auto md:w-full bg-white md:px-16 px-4  ' onSubmit={HandleSubmit} >
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