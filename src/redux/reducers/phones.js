import * as R from 'ramda'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHONES_SUCCESS':
      const newValues = R.indexBy(R.prop('id'), action.payload)
      return R.merge(state, newValues)
    case 'LOAD_MORE_PHONES_SUCCESS':
      const moreValues = R.indexBy(R.prop('id'), action.payload)
      return R.merge(state, moreValues)
    default:
      return state
  }
}