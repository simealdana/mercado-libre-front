import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import '../styles/index.css';
import {
  Route, Switch, BrowserRouter
} from 'react-router-dom';
import NavView from '../modules/items/views/navView';
import ItemsView from '../modules/items/views/itemsView';
import ItemDetailsView from '../modules/items/views/itemDetailsView';
import  {store,persistor}from '../redux/store/index';
import Loader from '../shared/loader/index';
import ErrorComponent from '../shared/error/errorComponent';
function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <NavView/>
          <Loader/>
          <ErrorComponent/>
            <Switch>
                <Route exact path="/search" component={ItemsView}/>
                <Route exact path="/item/:id" component={ItemDetailsView}/>
            </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Root;
