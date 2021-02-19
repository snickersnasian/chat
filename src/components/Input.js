import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typingTextAction, sendMessageAction } from '../redux/mainReducer'

export const Input = () => {

   const dispatch = useDispatch()
   const typingTextValue = useSelector(state => state.typingText)
   const typingText = (event) => {
      dispatch(typingTextAction(event.target.value))
   }

   const sendMessage = () => {
      let hours = (new Date()).getHours()
      let minutes = (new Date()).getMinutes()
      if (typingTextValue.length > 0) {
         dispatch(sendMessageAction(hours, minutes))
      }
   }

   const enterSendMessage = (event) => {
      if (event.key === 'Enter') {
         sendMessage()
      }
   }

   return (
      <div className="input__wrapper">
         <input className="chat__input" onChange={typingText} value={typingTextValue} onKeyPress={enterSendMessage} />
         <button className="chat__btn" onClick={sendMessage}>Отправить</button>
      </div>
   )
}