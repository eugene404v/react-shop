import {fetchPhones as fetchPhonesApi} from 'redux/api'

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: 'FETCH_PHONES_START'
  })

  try {
    const phones = await fetchPhonesApi()
    dispatch({
      type: 'FETCH_PHONES_SUCCESS',
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: 'FETCH_PHONES_FAILURE',
      payload: err,
      error: true
    })
  }
}