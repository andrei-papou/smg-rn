import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ooo, iconName}) => (
    <View style={styles.oooItem}>
        <Icon name={iconName} size={30} color="#555" style={styles.icon} />
        <View>
            <Text>{ooo.person}</Text>
            <Text style={styles.dateString}>{new Date(ooo.start).toLocaleString()} - {new Date(ooo.end).toLocaleString()}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    oooItem: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingVertical: 8
    },
    icon: {
        paddingRight: 10,
        paddingTop: 6
    },
    dateString: {
        fontSize: 12,
        color: '#aaa'
    }
});
