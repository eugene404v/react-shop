import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {Cart, Phones} from 'components'

const routes = (
  <Switch>
    <Route  path="/" exact component={Phones}/>
    <Route path="/cart"component={Cart}/>
  </Switch>
)

function App() {
  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
SIDEBAR
          </div>
          <div className="col-md-9">
            {routes}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App
