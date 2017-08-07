import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default SelectInput = ({input: {onChange, value, ...restInput}, data, ...props}) => (
    <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        <Picker
            selectedValue={value}
            onValueChange={onChange}>
            {
                data.map((item, i) => <Picker.Item key={i} {...item} />)
            }
        </Picker>
        {(props.meta.touched && !props.meta.valid) && <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        paddingHorizontal: 9
    },
    label: {
        color: '#ccc',
        marginLeft: 7
    },
});
