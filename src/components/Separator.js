import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginHorizontal: 15
    }
});

export default Separator;
