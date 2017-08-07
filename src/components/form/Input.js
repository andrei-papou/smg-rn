import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {ACCENT_COLOR} from '../../styles/global';

export const Input = ({input: {onChange, ...restInput}, ...props}) => (
    <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        <TextInput
            style={styles.input}
            onChangeText={onChange}
            {...restInput}
            underlineColorAndroid={ACCENT_COLOR}
            {...props} />
        {(props.meta.touched && !props.meta.valid) && <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
);

export const PasswordInput = props => (
    <Input {...props} secureTextEntry={true} />
);

export const Textarea = props => (
    <Input {...props} multiline={true} numberOfLines={4} />
);

const styles = StyleSheet.create({
    container: {
        width: 250,
        marginTop: 15,
    },
    input: {
        width: 250,
    },
    label: {
        color: '#ccc',
    },
    error: {
        color: ACCENT_COLOR,
        fontSize: 12,
    }
});
