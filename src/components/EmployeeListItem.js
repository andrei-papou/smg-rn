import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class EmployeeListItem extends Component {

    static propTypes = {
        employee: PropTypes.object.isRequired,
        showDetail: PropTypes.func.isRequired,
    };

    render() {
        const {employee, showDetail} = this.props;
        return (
            <TouchableOpacity onPress={() => showDetail(employee.id)}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{uri: employee.photo || 'https://placehold.it/50x50'}} />
                    </View>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={styles.name}>{employee.first_name} {employee.last_name}</Text>
                        </View>
                        <View>
                            <Text style={styles.smallCaption}>Department D{employee.department}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    name: {
        fontSize: 14,
        color: '#333'
    },
    smallCaption: {
        fontSize: 12,
        color: '#777'
    },
    imageContainer: {
        marginRight: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textContainer: {
        justifyContent: 'center'
    }
});
