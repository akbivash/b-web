import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='grid place-items-center'>
        <img src="https://previews.123rf.com/images/arcady31/arcady311303/arcady31130300032/18519959-vector-oops-symbol.jpg" alt="" className=' w-80 h-[300px] ' />
   
   <div className='grid gap-sm place-items-center'>
    <h2 className='font-semibold'>The page you are looking is not available</h2>
    <Link to='/' className='font-bold bg-blue-dark text-white p-sm rounded-md'>Go back to home</Link>
    </div> </div>
  )
}

export default PageNotFound