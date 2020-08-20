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
    case 'LOAD_MORE_PHONES_SUCCESS':     
    const ids = R.pluck('id', action.payload)
    return R.merge(state, {
        ids: R.concat(state.ids, ids)
      })
    default:
      return state
  }
}