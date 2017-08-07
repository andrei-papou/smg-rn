import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import * as globStyles from '../styles/global';
import * as authActions from '../actions/auth';
import validate from '../utils/validator';
import {Input, PasswordInput} from '../components/form';


class Login extends Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
        authActions: PropTypes.object.isRequired,
    };

    static validate(values) {
        return {
            username: validate(values.username).required().minLength(5).maxLength(255).error,
            password: validate(values.password).required().minLength(5).maxLength(255).error,
        };
    }

    componentDidMount() {
        this.props.authActions.checkAuth();
    }

    onSubmit = values => {
        return this.props.authActions.login(values);
    };

    render() {
        const {handleSubmit, invalid, submitting} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>iTechArt SMG</Text>

                <View style={styles.inputsWrapper}>
                    <Field name="username" label="Username" placeholder="your.username" component={Input} />
                    <Field name="password" label="Password" placeholder="*************" component={PasswordInput} />
                </View>

                <Button
                    title="Sign In"
                    disabled={invalid || submitting}
                    color={globStyles.ACCENT_COLOR}
                    onPress={handleSubmit(this.onSubmit)} />
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globStyles.BACK_COLOR
    },
    inputsWrapper: {
        marginBottom: 30
    },
    logo: {
        fontSize: 22,
        marginBottom: 10
    }
};

const LoginForm = reduxForm({
    form: 'login-form',
    validate: Login.validate
})(Login);

export default connect(
    state => ({}),
    dispatch => ({
        authActions: bindActionCreators(authActions, dispatch),
    })
)(LoginForm);
