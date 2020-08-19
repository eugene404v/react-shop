import * as R from 'ramda'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchPhones} from 'redux/actions/fetchPhones'
import {getPhones} from 'redux/api/selectors'

function Phones() {
  React.useEffect(() => {
    dispatch(fetchPhones())
  }, [])

  const dispatch = useDispatch();
  const phones = useSelector((state) => getPhones(state));

  const shortDescr = (descr) => `${R.take(60, descr)}...`

  return (
    <div className="books row">
      {phones.map((phone, index) => {return (
        <div key={`${index}${phone.id}`} className="col-sm-4 col-md-4 col-lg-4 book-list">
          <div className="thumbnail">
            <img src={phone.image} alt={phone.name} className="img-thumbnail"/>
            <div className="caption">
              <h4 className="pull-right">
                ${phone.price}
              </h4>
              <h4>
                <Link to={`/phones/${phone.id}`}>
                  {phone.name}
                </Link>
              </h4>
              <p>{shortDescr(phone.description)}</p>
              <p className="itemButton">
                <button className="btn btn-primary">Buy now</button>
                <Link to={`/phones/${phone.id}`} className="btn btn-default">
                  More info
                </Link>
              </p>
            </div>
          </div>
        </div>
      )})}
    </div>
  )
}




const mapDispatchToProps = {
  fetchPhones
}

export default Phones
