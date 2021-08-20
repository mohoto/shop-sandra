import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ThemeContextProvider from "./context/ThemeContext"
import FiltersProviders from "./context"
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'

const client = new ApolloClient({
  //uri: 'http://localhost:5000/graphql',
  uri:'https://marketplace-app-react.herokuapp.com/graphql',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <ApolloProvider client={client}>
          <FiltersProviders>
              <App />
          </FiltersProviders>
        </ApolloProvider>
      </PersistGate> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
