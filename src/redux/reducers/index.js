import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router'

import phones from 'redux/reducers/phones'
import phonesPage from 'redux/reducers/phonesPage'

export default history => combineReducers({
  phones,
  phonesPage,
  router: connectRouter(history)
})