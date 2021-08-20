import React, {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import {selectCart} from '../../redux/reducers/cartSlice'
import {priceFormatted} from '../../lib/Helpers'
import {useHistory} from 'react-router-dom'
import {setProduct} from '../../redux/reducers/productSlice'
import {selectCartTotal} from '../../redux/selector/selector'
import {selectAuth} from '../../redux/reducers/authSlice'
import GoogleBtn from './GoogleBtn';

function CartDropdown({ show, handleOnClick }) {

	//const getItems = state => state.cart.items;
	const {items} = useSelector(selectCart);
	const total = useSelector(selectCartTotal);
	const dispatch = useDispatch();
	const history = useHistory();

	/* const subtotalSelector = createSelector(
		getItems,
		it => it.reduce((acc, it) => acc + it.price, 0)
	)  */
	//console.log('subtotalSelector:', subtotalSelector());
	
	
	const selectProduct = (e,item) => {
        e.preventDefault();
        dispatch(setProduct(item));
		history.push(`/product/${item.id}`)
    }

	return(
	<div onClick={handleOnClick} className={`dropdown-menu dropdown-menu-right p-3 ${show && 'show'}`} aria-labelledby="dropdownCart" style={{minWidth:'300px'}}>
	<div className="d-flex justify-content-between"> 
		<span>{items.length}</span>
		<span className="emphasis">{priceFormatted(total)}</span>
	</div>
	<div className="dropdown-divider"></div>
	<ul className="shopping-cart-items pt-2 pl-0" aria-labelledby="dropdownCart">
		{items.map(item => (
			<li className="row mt-3" key={item.id}>
				<div className="col-md-4 col-2">
					<img src={`/images/${item.id}.png`} alt="" className="img-fluid rounded mb-2 shadow" />
				</div>
				<div className="col-8">
				<h6>
					{/* <Link to={{
						pathname: "/product",
						props: { product: 'men_1' },
					}}>{item.name}</Link> */}
					<a href="#"	onClick={e => selectProduct(e,item)}>{item.name}</a>
				</h6>
				<span className="text-muted">quantity: {item.quantity}</span><br />
				<span className="emphasis">{priceFormatted(item.price * item.quantity)}</span></div>
			</li>)
		)}
	</ul>
	<Link to='/cart'  className="btn btn-md btn-block btn-orange mt-3" style={{margin: 0}}>voir le panier</Link>	
</div>)
}
function Header() {
	const {items} = useSelector(selectCart);
	const [currentLink, setCurrent] = useState('')
	const [show, setShow] = useState(false)
	const links = [ "cart", "orders", "test"]
	const handleOnClick = () => setShow(!show)

	const {authentificated} = useSelector(selectAuth);

    return( 
	<header className="target-hover">
    <nav className="navbar navbar-dark bg-dark navbar-expand-md fixed-top">
    <div className="container">
	  <Link to='/' className="navbar-brand font" style={{fontSize: '30px'}}>CLICK & COLLECT</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarNav3">
        <ul className="navbar-nav ml-auto">
          {links.map((link, index)=> {
              const isCurrent = link === currentLink
              const isActive = link === currentLink && 'active'
              return( 
              <li key={index} className={`nav-item ${isActive}`}>
                  <NavLink to={`/${link}`} 
				  className="nav-link" 
				  //aria-current={isCurrent}
				  activeClassName="selected"
				  activeStyle={{
					fontWeight: "bold",
					color: "rewhite"
				  }}
				  >
					  {link}
				  </NavLink>
              </li>)
          })}
		
			<li className="nav-item dropdown" onClick={() => setShow(!show)} >
				<a className={`nav-link dropdown-toggle ${show && 'show'}`} >
				<i className="fas fa-shopping-cart"></i> <span className="badge bg-orange">{items?.length >0 ? items.length : null}</span></a>
				<CartDropdown show={show} handleOnClick={handleOnClick}/>
		   </li>
		   <li className="nav-item">
				{!authentificated ? (
					<Link to="/login" className="nav-link">Connexion</Link>
				):(
					<GoogleBtn />
				)}
		   </li>  
        </ul>
      </div>
    </div>
  </nav>
  </header>)
}
export default Header