import {loadMorePhones as loadMorePhonesApi} from 'redux/api'
import { getRenderedPhonesLength } from 'redux/api/selectors'

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState())
  dispatch({
    type: 'LOAD_MORE_PHONES_START'
  })

  try {
    const phones = await loadMorePhonesApi({offset})
    dispatch({
      type: 'LOAD_MORE_PHONES_SUCCESS',
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: 'LOAD_MORE_PHONES_FAILURE',
      payload: err,
      error: true
    })
  }
}