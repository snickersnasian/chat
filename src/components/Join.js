import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setNameAction, getTimeAction } from '../redux/mainReducer'

export const Join = () => {

   const dispatch = useDispatch()

   const name = useSelector(state => state.name)

   const setName = (event) => {
      dispatch(setNameAction(event.target.value))
   }
   const getTime = () => {
      let hours = (new Date()).getHours()
      let minutes = (new Date()).getMinutes()
      dispatch(getTimeAction(hours, minutes))
   }

   const [section, setSection] = useState('work')

   return (
      <div className="join__wrapper">
         <div className="join__inner">
            <h1 className="heading">
               Выберите раздел
            </h1>
            <input className="join__input" placeholder="Введите имя" onChange={setName} />
            <div>
               <select className="join__select" onChange={(event) => setSection(event.target.value)}>
                  <option value="work">Рабочий раздел</option>
                  <option value="general">Общий раздел</option>
               </select>
            </div>
            <Link to={`/${section}`}>
               <button type="submit" className="join__btn" onClick={getTime} disabled={name ? false : true}>Войти</button>
            </Link>
         </div>
      </div>
   )
}