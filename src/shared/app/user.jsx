import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Helmet} from 'react-helmet';
import * as actions from '../actions/index'

class User extends Component {
    static fetchData({store}) {
        return store.dispatch(actions.getName(2));
    }

    componentDidMount() {
        this.props.getName(2);
        console.log(localStorage.getItem('item'))
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>User</title>
                </Helmet>
                <strong>User page </strong>
                Async data [
                name: {this.props.name}
                email: {this.props.email}
                ]
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(User);