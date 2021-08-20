import React from 'react'
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setProduct} from '../../redux/reducers/productSlice'
import {priceFormatted} from '../../lib/Helpers'

function Card({product}) {

    const {id, name, price, category} = product;

    const history = useHistory();
    const dispatch = useDispatch();
    const selectProduct = e => {
        e.preventDefault();
        //dispatch(setProduct({id:product.id, name:product.name, category:product.category.name, price:product.price, filter:product.filter}));
        dispatch(setProduct(product));
        history.push(`/product/${id}`);
    }

    return(
        <div className="col-6 col-md-6 col-lg-4 mb-3">
            <div className="card h-100 border-0">
                <div className="card-img-top">
                <img src={`/images/${id}.png`} className="img-fluid mx-auto d-block" alt="Card image cap" />
                </div>
                <div className="card-body text-center">
                    
                    <h4 className="card-title">
                        
                            {/* <Link to={{
                            pathname: `${id}`,
                            state: {
                                product: product
                            },
                            Soit on utilise "state", soit on utilise "props" 
                            props: {
                                product: product
                            }
                        }}
                        className=" font-weight-bold text-dark text-uppercase small">{name}</Link>  */}
                        <a href="#" className="font-weight-bold text-dark text-uppercase small" onClick={selectProduct}>{name}</a> 
                    </h4>
            
                <h5 className="card-price small text-warning">
                    {priceFormatted(price)}
                </h5>
                </div>
            </div>
        </div>
    )
}
export default Card