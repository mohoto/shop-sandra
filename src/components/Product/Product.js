import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useParams, useHistory, useLocation} from "react-router-dom"
import {useQuery} from '@apollo/client'
import {GET_PRODUCT} from '../../lib/queries'
import {useDispatch, useSelector} from 'react-redux'
import {selectProduct, updateProductName} from '../../redux/reducers/productSlice'
import SinglePost from './SinglePost';

function Product() {

    //Ici, on essaye de récupérer le "props" dans le lien "Link" du component "Card"
    //const location = useLocation();
    //Ici on récupère le state envoyé par le lien(Link) dans le component "Card"
    //const {product} = location.state;
    //Ou alors(si on veut utiliser "props") pour récupérer "product"

    const {product} = useSelector(selectProduct);


    
    //console.log('productFromLocalStorage:', productFromLocalStorage)


    /* useEffect(() => {
      const productFromLocalStorage = JSON.parse(window.localStorage.getItem("product"));
      if(productFromLocalStorage) {
        setProductSelected(productFromLocalStorage);
      }
    }, []);

    useEffect(() => {
      window.localStorage.setItem("product", JSON.stringify(productSelected));
    }, [productSelected]); */





    /*const {loading, error, data} = useQuery(GET_PRODUCT, {
        variables: {id: productId}
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data) return <p>Pas de data</p>;
    console.dir(data);
    const product = data.product;
    const {id, name, category, price} = product;*/

    return(
        <section className="pt-5 pb-5">
        <div className="container">
          <SinglePost product={product} />
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <Link to="/">
              <i className="fas fa-arrow-left mr-2"></i> Back 
            </Link>
          </div>
        </div>
      </section>
    )
}
export default Product