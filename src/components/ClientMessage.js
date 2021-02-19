import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMessageAction, editMessageAction } from '../redux/mainReducer'
import ReactEmoji from 'react-emoji'

export const ClientMessage = (props) => {

   const dispatch = useDispatch()
   const [edit, setEdit] = useState(false)
   const time = useSelector(state => state.time)


   const deleteMessage = (id) => {
      dispatch(deleteMessageAction(id))
   }

   const editMessage = (id, text) => {
      if (!text) {
         deleteMessage(id)
      }
      dispatch(editMessageAction(id, text))
   }


   return (
      <div className="message__inner" onDoubleClick={() => setEdit(!edit)}>
         <div className="message">
            {edit
               ? <input className="edit__message"
                  value={props.el.message}
                  onChange={(event) => editMessage(props.el.id, event.target.value)}
                  onBlur={() => setEdit(!edit)}
                  autoFocus={true}
                  onKeyPress={(event) => event.key === 'Enter' && setEdit(!edit)}
               />
               : <span className="message__span">{ReactEmoji.emojify(props.el.message)}</span>
            }
         </div>
         <span className="sent__time">
            {time[0] < 10 ? `0${time[0]}` : time[0]}:{time[1] < 10 ? `0${time[1]}` : time[1]}
         </span>
      </div >
   )
}