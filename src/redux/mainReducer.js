const NAME = 'NAME'
const GET_TIME = 'GET_TIME'
const TYPING_TEXT = 'TYPING_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'
const EDIT_MESSAGE = 'EDIT_MESSAGE'

const initialState = {
   name: '',
   time: [],
   messages: [],
   typingText: ''
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case NAME:
         return {
            ...state,
            name: action.name
         }
      case GET_TIME:
         return {
            ...state,
            time: [action.hours, action.minutes]
         }
      case TYPING_TEXT:
         return {
            ...state,
            typingText: action.text
         }
      case SEND_MESSAGE:
         return {
            ...state,
            time: [action.hours, action.minutes],
            messages: [...state.messages, { id: Date.now(), message: state.typingText }],
            typingText: '',
         }
      case DELETE_MESSAGE:
         return {
            ...state,
            messages: [...state.messages.filter(el => el.id !== action.id)]
         }
      case EDIT_MESSAGE:
         return {
            ...state,
            messages: [...state.messages.map(el => {
               if (el.id === action.id) {
                  let elCopy = el
                  elCopy.message = action.text
                  return elCopy
               }
               return el
            })]
         }
      default:
         return state
   }
}

export const setNameAction = (name) => ({ type: NAME, name })
export const getTimeAction = (hours, minutes) => ({ type: GET_TIME, hours, minutes })
export const typingTextAction = (text) => ({ type: TYPING_TEXT, text })
export const sendMessageAction = (hours, minutes) => ({ type: SEND_MESSAGE, hours, minutes })
export const deleteMessageAction = (id) => ({ type: DELETE_MESSAGE, id })
export const editMessageAction = (id, text) => ({ type: EDIT_MESSAGE, id, text })