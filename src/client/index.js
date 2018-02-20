import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from '../shared/app/redux/store';
import store from '../shared/store';
import App from '../shared/app/app.jsx';
// import App from '../shared/App';

hydrate((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
