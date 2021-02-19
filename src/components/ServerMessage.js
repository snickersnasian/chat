import React from 'react'
import { useSelector } from 'react-redux'

export const ServerMessage = () => {

   const name = useSelector(state => state.name)
   const time = useSelector(state => state.time)

   return (
      <div className="message__inner server">
         <div className="message">
            <span className="message__span server">{name} вошел в чат</span>
         </div>
         <span className="sent__time server">
            {time[0] < 10 ? `0${time[0]}` : time[0]}:{time[1] < 10 ? `0${time[1]}` : time[1]}
         </span>
      </div>
   )
}