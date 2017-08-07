import React, {Component, PropTypes} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddRequestButton extends Component {

    static propTypes = {
        iconName: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const {iconName, text, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <Icon name={iconName} size={30} color="#fff" style={styles.icon} />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#888',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 2
    },
    icon: {
      width: 45
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
