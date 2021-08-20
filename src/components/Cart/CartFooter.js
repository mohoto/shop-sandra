import React from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import {priceFormatted} from '../../lib/Helpers'
import {selectCartTotal} from '../../redux/selector/selector';
import {selectCart} from '../../redux/reducers/cartSlice'

const styles = {
  disabled: {
    cursor: 'not-allowed', 
    opacity: 0.5
  }
}
  
function CartFooter() {

  const {items} = useSelector(selectCart)
  const total = useSelector(selectCartTotal);

    return(
      <>
       <div className="text-right mb-4">
          <h4>Total:</h4>
          <h1>{priceFormatted(total)}</h1>
        </div>  
        <div className="d-flex justify-content-between">
        <Link  to="/">
          <i className="fas fa-arrow-left mr-2"></i> Continue Shopping 
        </Link>
        {items.length > 0 &&
          <Link className="btn btn-primary mb-4 btn-lg pl-5 pr-5" to="/checkout">
            Commander
          </Link>
        }
      </div>
      </> 
    )
  }
  export default CartFooter