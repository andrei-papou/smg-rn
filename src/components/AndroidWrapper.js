import React, {Component, PropTypes} from 'react';
import {DrawerLayoutAndroid, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ANON_ALLOWED_ROUTES, MAIN, ABOUT} from '../constants/route-keys';
import {ACCENT_COLOR} from '../styles/global';

export default class AndroidWrapper extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
        routeKey: PropTypes.string.isRequired,
        logout: PropTypes.func.isRequired,
    };

    renderNavView = () => {
        const {push, logout, routeKey} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.navLink}
                    disabled={routeKey === MAIN}
                    onPress={() => {
                        push(MAIN);
                        this.closeDrawer();
                    }}>
                    <View style={styles.icon}>
                        <Icon name="rocket" size={20} color="#333" />
                    </View>
                    <Text>App</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navLink}
                    onPress={() => {
                        push(ABOUT);
                        this.closeDrawer();
                    }}>
                    <View style={styles.icon}>
                        <Icon name="address-card" size={20} color="#333" />
                    </View>
                    <Text>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navLink}
                    onPress={() => {
                        logout();
                        this.closeDrawer();
                    }}>
                    <View style={styles.icon}>
                        <Icon name="sign-out" size={20} color="#333" />
                    </View>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    };

    openDrawer = () => {
        this.drawer && this.drawer.openDrawer();
    };

    closeDrawer = () => {
        this.drawer && this.drawer.closeDrawer();
    };

    render() {
        const {routeKey, children} = this.props;
        return !ANON_ALLOWED_ROUTES.includes(routeKey) ? (
            <DrawerLayoutAndroid
                drawerWidth={300}
                ref={el => this.drawer = el}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderNavView}>
                <Icon.ToolbarAndroid
                    title="SMG"
                    titleColor={'#fff'}
                    navIconName="bars"
                    style={{height: 55, backgroundColor: ACCENT_COLOR}}
                    onIconClicked={this.openDrawer} />
                {children}
            </DrawerLayoutAndroid>
        ) : children;
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    navLink: {
        paddingLeft: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    icon: {
        marginRight: 10,
        width: 30
    }
});
