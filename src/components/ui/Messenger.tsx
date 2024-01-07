import React from 'react'
import { CustomChat, FacebookProvider } from 'react-facebook';

const Messenger = () => {
  return (
    <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID!} chatSupport>
        <CustomChat pageId={process.env.REACT_APP_FB_PAGE_ID!} minimized={false}/>
      </FacebookProvider>   
  )
}

export default Messenger