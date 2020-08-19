import * as R from 'ramda'

const initialState = {
  ids: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHONES_SUCCESS':     
      return R.merge(state, {
        ids: R.pluck('id', action.payload)
      })
    default: 
      return state
  }
}