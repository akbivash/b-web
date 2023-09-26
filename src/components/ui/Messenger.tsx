import React from 'react'
import { CustomChat, FacebookProvider } from 'react-facebook';

const Messenger = () => {
  return (
    <FacebookProvider appId="1273778163329625" chatSupport>
        <CustomChat pageId="105366191144221" minimized={false}/>
      </FacebookProvider>   
  )
}

export default Messenger