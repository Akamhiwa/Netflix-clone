import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function Nav({onOpen}) {
  return (
    <div className={`flex h-20 fixed top-0 right-0 left-0 items-center px-7 md:pr-20 z-20 bg-black  py-2`}>
      <div className='flex justify-between w-full items-center' >
      <h1 className=' text-red-600 text-4xl font-bold italic cursor-pointer'>NETFLIX</h1>
      <ul>
        <li className='text-white cursor-pointer'>
         <SearchIcon fontSize='medium' onClick={onOpen}/>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Nav