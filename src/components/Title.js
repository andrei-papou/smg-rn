import React, {PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = ({text}) => <View><Text style={styles.title}>{text}</Text></View>;

Title.propTypes = {
    text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 12
    }
});

export default Title;
