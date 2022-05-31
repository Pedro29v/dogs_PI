import React from 'react';
import { useDispatch} from 'react-redux';
import {sortName} from '../redux/actions/actions'

function OrderAlf() {

    const dispatch = useDispatch();

    function handleOrdenar(e) {
      e.preventDefault();
      if(e.target.value !== 'order'){
        dispatch(sortName(e.target.value));
      }
    }

  return (
    <div>
          <select  onChange={e=> handleOrdenar(e)}>
            <option value='order'>Order</option>
            <option value='asc'> A a Z  </option>
            <option value='desc'> Z a A  </option>

          </select>
    </div>
  )
}

export default OrderAlf