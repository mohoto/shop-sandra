
import React, {useState, useEffect} from 'react';
import CartFooter from './CartFooter'
import { Table } from '../components'
import {useSelector} from 'react-redux';
import {selectCart} from '../../redux/reducers/cartSlice'
import Row from './Row'

function Cart() {

  const {items} = useSelector(selectCart);
  //Ou alors, on peut utiliser
  //const cart = useSelector(selectCart);
  //const { items, loading, error } = cart;

  return (
    <Table heading="Mon panier" subheading={items.length > 1 ? "produits dans votre panier" : "produit dans votre panier"} items={items}>
      <tbody> 
        {items ? items.map(item => (
            <Row item={item} /> )
        ):
        (<div>No Items in the cart yet </div>
        )}
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
