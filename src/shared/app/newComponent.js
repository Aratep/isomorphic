import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Helmet} from 'react-helmet';
import * as actions from '../actions/index'

class NewComponent extends Component {
    constructor() {
        super();

        this.state = {
            something: 'Something'
        }
    }
    static fetchData({store}) {
        return store.dispatch(actions.newComp('Some Name'));
    }

    componentDidMount() {
        this.props.newComp('Other name');
        // console.log(localStorage.getItem('item'))
    }

    click  () {
        console.log(localStorage.getItem('item'))
        console.log(this.state.something)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>New Component</title>
                </Helmet>
                <strong>New Component Page </strong>
                <button onClick={this.click.bind(this)}>Click </button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.newComp,
    }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(NewComponent);