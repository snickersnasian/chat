import React from 'react'
import { Message } from './Message'
import { Input } from './Input'

export const Work = () => {
   return (
      <div className="chat__wrapper">
         <div className="chat__inner">
            <Message />
            <Input />
         </div>
      </div>
   )
}