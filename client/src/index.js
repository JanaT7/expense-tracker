import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

import  './components/app.css';
import { Products } from './components/Products';
import { NewProduct } from './components/NewProduct';
import { Register } from './components/Register';
import { Expenses } from './components/Expenses';

ReactDOM.render(
    <BrowserRouter>
        <Route exact path='/' component={App} />
        <Route path='/register' component={Register} />
        <Route path='/products' component={Products} />
        <Route path='/new-product' component={NewProduct} />
        <Route path='/expenses' component={Expenses} />

    </BrowserRouter>
    , document.getElementById("root"));


