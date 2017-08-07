import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import DetailRow from './DetailRow';


export default class EmployeeDetail extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        closeSection: PropTypes.func.isRequired
    };

    render() {
        const {data, closeSection} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.photoWrapper}>
                    <Image source={{uri: data.photo_large || 'https://placehold.it/150x150'}} style={styles.photo} />
                </View>

                <DetailRow label="First name" value={data.first_name} />
                <DetailRow label="Last name" value={data.last_name} />
                <DetailRow label="Patronymic" value={data.patronymic} />
                <DetailRow label="Skype" value={data.skype} />
                <DetailRow label="Email" value={data.email} />
                <DetailRow label="Birthday" value={data.birthday} />
                <DetailRow label="Employment date" value={data.employment_date} />

                <View style={styles.button}>
                    <Button title="Back" onPress={closeSection} />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        color: '#333'
    },
    value: {
        color: '#333'
    },
    photoWrapper: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 25,
        backgroundColor: '#e5e5e5'
    },
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
    }
});
