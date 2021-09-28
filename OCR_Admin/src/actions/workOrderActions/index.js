import axios from 'axios'
import * as types from '../../constants/ActionTypes'
import api from '../../api'


const id_token = localStorage.getItem('id_token')

const headers = {
  'Content-Type': 'application/json',
  //Authorization: id_token,
}



export const getNotification = () => async dispatch => {
  const response = await axios.get(`${api.api}`, {headers})
  try{
    return dispatch ({
      type: types.STORE_NOTIFICATION_REDUCER,
    payload: response.data,
    })
  }
  catch(error){
    return dispatch ({
      type: 'ERROR',
    payload: response,
    })
  }
}

export const storeScrollYPosition = payload => ({
  type: types.STORE_SCROLLY_POSITION,
  payload
})


