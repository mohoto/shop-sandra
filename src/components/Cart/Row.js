import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateCart, removeItem} from '../../redux/reducers/cartSlice'
import {priceFormatted} from '../../lib/Helpers'

function Row({item}) {

    const {id, name, price, quantity} = item;
    const dispatch = useDispatch()
    const handleChangeQuantity = e => {
        //dispatch(updateCart({...item, id: item.id, quantity: e.target.value}));
        dispatch(updateCart({id: item.id, quantity: e.target.value}));
    }

    return(
    <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img src={`/images/${id}.png`} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow" />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h4>{name}</h4>
              <p className="font-weight-light">Brand &amp; {name}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">{priceFormatted(price * quantity)}</td>
        <td data-th="Quantity">
          <input type="number" className="form-control form-control-lg text-center" value={quantity} onChange={handleChangeQuantity}/>
        </td>
        <td className="actions" data-th="">
          <div className="text-right">
            {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={() => dispatch(updateName({id: id}))}>
              <i className="fas fa-sync"></i>
            </button> */}
            <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={() => dispatch(removeItem({id: id}))}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    )
}
export default Row