import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import {DateInput, TimeInput, SelectInput, Textarea} from './form';
import validate from '../utils/validator';
import * as globalStyles from '../styles/global';

class CreateBusinessLeave extends Component {

    static propTypes = {
        employees: PropTypes.array.isRequired,
        hideModal: PropTypes.func.isRequired,
        createBusinessLeave: PropTypes.func.isRequired,
    };

    static validate(values) {
        return {
            approver: validate(values.approver).required().int().error,
            comment: validate(values.comment).required().maxLength(255).error,
        };
    }

    onSubmit = values => {
        const {hideModal, createBusinessLeave} = this.props;
        const {
            start_date: {year: sYear, month: sMonth, day: sDay},
            start_time: {hour: sHour, minute: sMinute},
            end_date: {year: eYear, month: eMonth, day: eDay},
            end_time: {hour: eHour, minute: eMinute},
            approver,
            comment
        } = values;
        return createBusinessLeave({
            start: new Date(sYear, sMonth, sDay, sHour, sMinute).toISOString(),
            end: new Date(eYear, eMonth, eDay, eHour, eMinute).toISOString(),
            approver,
            comment
        }).then(() => hideModal());
    };

    render() {
        const {handleSubmit, invalid, submitting, hideModal, employees} = this.props;
        const empls = employees
            .filter(e => e.is_manager)
            .map(e => ({label: `${e.first_name} ${e.last_name}`, value: e.id}));
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inline}>
                        <Field name="start_date" label="Start date" component={DateInput} />
                        <Field name="start_time" label="Start time" component={TimeInput} />
                    </View>
                    <View style={styles.inline}>
                        <Field name="end_date" label="End date" component={DateInput} />
                        <Field name="end_time" label="End time" component={TimeInput} />
                    </View>

                    <Field name="approver" label="Approver" data={empls} component={SelectInput} />

                    <View style={{marginLeft: 15}}>
                        <Field name="comment" label="Comment" component={Textarea} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonMargin}>
                            <Button
                                title="Create business leave"
                                disabled={invalid || submitting}
                                color={globalStyles.ACCENT_COLOR}
                                style={styles.buttonMargin}
                                onPress={handleSubmit(this.onSubmit)} />
                        </View>
                        <View>
                            <Button
                                title="Skip"
                                color="#777"
                                onPress={hideModal} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    inline: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginTop: 40,
        marginHorizontal: 15
    },
    buttonMargin: {
        marginBottom: 10
    }
});

export default reduxForm({
    form: 'create-business-leave-form',
    validate: CreateBusinessLeave.validate
})(CreateBusinessLeave);
