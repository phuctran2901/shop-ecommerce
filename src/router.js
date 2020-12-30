import React from 'react';
import NotFound from './components/NotFound';
import HomePage from './pages/Home/HomePage';
import PagesCard from './pages/PagesCard/PagesCard';
import CartPages from './pages/CartPages/CartPages';
import ProductsPage from './pages/PagesProduct/ProductsPage';
import Signin from './components/Auth/signin';
import Signup from './components/Auth/signup';
const routers = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage/>
    },
    {
        path : '/:trademark',
        exact : true,
        main : ({match}) => <ProductsPage match={match}/>
    },
    {
        path : '/products/:trademark/:name.:id.html',
        exact : true,
        main : ({match}) => <PagesCard match = {match}/>
    },
    {
        path : '/:slug/cart',
        exact : true,
        main : ({match,history}) => <CartPages match = {match} history = {history}/>
    },
    {
        path : '/auth/signin',
        exact : true,
        main : ({match,history}) => <Signin match = {match} history = {history}/>
    },
    {
        path : '/auth/signup',
        exact : true,
        main : ({match,history}) => <Signup match = {match} history = {history}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound/>
    }
]

export default routers;