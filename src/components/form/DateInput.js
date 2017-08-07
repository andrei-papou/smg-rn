import React, {Component} from 'react';
import {TouchableOpacity, View, Text, DatePickerAndroid, StyleSheet} from 'react-native';
import * as globalStyles from '../../styles/global';

export default DateInput = ({input: {onChange, value, ...restInput}, ...props}) => (
    <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        <TouchableOpacity
            onPress={() => {
                DatePickerAndroid.open({date: new Date()}).then(value => onChange(value));
            }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {value ? `${value.year}/${value.month}/${value.day}` : 'Select date'}
                </Text>
            </View>
        </TouchableOpacity>
        {(props.meta.touched && !props.meta.valid) && <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 5
    },
    label: {
        color: '#ccc',
        marginBottom: 10
    },
    button: {
        backgroundColor: globalStyles.ACCENT_COLOR,
        borderRadius: 4,
        paddingVertical: 10,
        alignItems: 'center',
        width: 120
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    error: {
        color: globalStyles.ACCENT_COLOR,
        fontSize: 12,
    }
});
