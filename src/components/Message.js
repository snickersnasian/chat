import React from 'react'
import { useSelector } from 'react-redux'
import { ClientMessage } from './ClientMessage'
import { ServerMessage } from './ServerMessage'
import ScrollToBottom from 'react-scroll-to-bottom'

export const Message = () => {

   const messages = useSelector(state => state.messages)

   return (
      <ScrollToBottom className="scroll">
         <ServerMessage />
         {messages.map(el => <div key={el.id}><ClientMessage el={el} /></div>)}
      </ScrollToBottom>
   )
}