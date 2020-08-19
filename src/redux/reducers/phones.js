import * as R from 'ramda'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHONES_SUCCESS':
      const newValues = R.indexBy(R.prop('id'), action.payload)
      return R.merge(state, newValues)
    default:
      return state
  }
}