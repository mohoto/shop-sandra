import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Product from "./components/Product/Product";
import Home from "./components/Home";
import "./App.css";
import Error from "./components/Error";
import Test from "./components/Test/Test";
import Login from "./components/Login/Login";
import {useSelector} from 'react-redux'
import {selectAuth} from './redux/reducers/authSlice'

function App() {


  const {authentificated} = useSelector(selectAuth);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            {authentificated ? <Home/> : <Redirect to="/login"/>}
          </Route>
          {/* <Route path="/:id" render={(props) => <Product {...props} />} /> */}
          <Route path="/login">
            {authentificated ? <Redirect to="/"/> : <Login/>}
          </Route>
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/payment" component={Payment} />
          <Route path="/test" component={Test} />
          <Route  component={Error} />
        </Switch>
      </Layout>
    </Router>
  );
}
export default App;
