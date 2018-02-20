import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Home extends Component {
    componentDidMount() {
        localStorage.setItem('item', 'some item to showsdfasdf')
    }
    static fetchData({ store }) {
        // localStorage.setItem('item', 'some item to show')
        return new Promise(resolve => resolve());//default
    }


    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>
                <strong>Homee page</strong>
            </div>
        );
    }
}
export default Home;