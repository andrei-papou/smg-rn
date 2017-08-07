import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ACCENT_COLOR} from '../styles/global';
import {MAIN} from '../constants/route-keys';

export default class About extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired
    };

    render() {
        const {push} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>SMG-Like Application</Text>
                <Text style={styles.content}>
                    Created within performance review preparation with a demonstrative purposes
                    and is intended to show the pros and cons of using React Native for building mobile
                    applications (at least for Android).
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Go to application"
                        color={ACCENT_COLOR}
                        onPress={() => push(MAIN)} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    title: {
        fontSize: 20,
        color: '#333',
        marginBottom: 15
    },
    content: {
        textAlign: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    button: {

    }
});
