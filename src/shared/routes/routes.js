import Navbar from '../app/navbar.jsx';
import Home from '../app/Home.jsx';
import User from '../app/user.jsx';
import NewComponent from '../app/newComponent';

import Login from '../components/login/Login';
import ProductList from '../components/products/ProductList';
import Register from '../components/register/Register';
import SingleProduct from '../components/single-product/SingleProduct';
import UserAccount from '../components/user-account/UserAccount';
import UserCart from '../components/user-cart/UserCart';
import {NoMatch} from '../components/404/NoMatch';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/user',
            component: User,
            exact: true
        },
        {
            path: '/new-component',
            component: NewComponent,
            exact: true
        },
        {
            path: '/login',
            component: Login,
            exact: true
        },
        // {
        //     path: '/register',
        //     component: Register,
        //     exact: true
        // },
        // {
        //     path: '/products-list',
        //     component: ProductList,
        //     exact: true
        // },
        // {
        //     path: '/my-cart',
        //     component: UserCart,
        //     exact: true
        // },
        // {
        //     path: '/my-account',
        //     component: UserAccount,
        //     exact: true
        // },
        // {
        //     path: '/product-list/product/:id',
        //     component: SingleProduct,
        //     exact: true
        // },
        // {
        //     component: NoMatch,
        // },
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
} 