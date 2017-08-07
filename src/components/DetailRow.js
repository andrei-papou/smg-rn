import React, {PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailRow = ({label, value}) => (
    <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

DetailRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 7.5,
        marginHorizontal: 35,
    },
    label: {
        color: '#777'
    },
    value: {
        color: '#333'
    }
});

export default DetailRow;
