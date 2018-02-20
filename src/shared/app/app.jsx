import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import RedirectWithStatus from './redirect-w-status.jsx';
// import Navbar from './navbar.jsx';
import routeOptions from '../routes/routes';

import NavBar from '../components/header/NavBar';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";

class App extends Component {
    render() {
        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'}
                   exact={exact}
                   path={path}
                   component={component} />
        );
        let redirects = routeOptions.redirects.map(({ from, to, status }, i) =>
            <RedirectWithStatus key={Math.random() + 'REDIRECT_'}
                                from={from}
                                to={to}
                                status={status} />
        );
        return (
            <div className=''>
                <NavBar/>
                <div className="w3-main custom-main" style={{marginLeft: 250 + "px"}}>
                    <Header/>
                    <div className='margin'>
                        <Switch>
                            {routes}
                        </Switch>
                    </div>
                    {/*<Footer/>*/}
                </div>
            </div>
        );
        // return (
        //     <div>
        //         <Navbar />
        //         <Switch>
        //             {routes}
        //             {redirects}
        //         </Switch>
        //     </div>
        // );
    }
}
export default App;