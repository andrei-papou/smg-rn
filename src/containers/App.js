import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';
import store from '../store';
import {push, pop} from '../actions/navigation';
import {logout} from '../actions/auth';
import AndroidWrapper from '../components/AndroidWrapper';

class Nav extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        route: PropTypes.object.isRequired,
    };

    render() {
        const {route, push, logout} = this.props;
        return (
            <AndroidWrapper push={push} routeKey={route.key} logout={logout}>
                <route.component {...route.props} push={push} />
            </AndroidWrapper>
        );
    }

}

const NavWrapper = connect(
    state => ({
        route: state.navigation
    }),
    dispatch => bindActionCreators({
        push,
        logout
    }, dispatch)
)(Nav);


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <NavWrapper />
            </Provider>
        );
    }

}
