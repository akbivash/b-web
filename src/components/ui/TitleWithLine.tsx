import React from 'react'
import Typewriter from './Typewriter'

type TitleProps = {
  title:string
}
const TitleWithLine = ({title}:TitleProps) => {
  return (
    <div className='text-3xl  justify-center w-full font-bold grid sm:flex sm:items-center gap-xs'>
      <span className='w-10 h-1 bg-orange-light grid'></span>
     <Typewriter text={title}/>
    </div>
  )
}

export default TitleWithLine