import React, { ReactNode } from 'react'

interface Children {
    children: ReactNode
}

const Layout = ({children}:Children) => {
  return (
    <div className='relative mx-auto h-full  w-full max-w-[1500px] px-sm'>
        {children}
    </div>
  )
}

export default Layout