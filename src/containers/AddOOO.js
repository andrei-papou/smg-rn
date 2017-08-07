import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as oooActions from '../actions/ooo';
import AddRequestButton from '../components/AddRequestButton';
import CreateTimeShift from '../components/CreateTimeShift';
import CreateVacation from '../components/CreateVacation';
import CreateBusinessLeave from '../components/CreateBusinessLeave';
import CreateUnpaid from '../components/CreateUnpaid';

const modalTypes = {
    TIME_SHIFT:     1,
    VACATION:       2,
    BUSINESS_LEAVE: 3,
    UNPAID:         4
};

class AddOOO extends Component {

    static propTypes = {
        oooActions: PropTypes.object.isRequired,

        employees: PropTypes.array
    };

    static defaultTypes = {
        employees: []
    };

    constructor(props) {
        super(props);
        this.state = {modal: null};
    }

    openModal = modal => this.setState({modal});
    hideModal = () => this.setState({modal: null});

    get oooForm() {
        const {oooActions, employees} = this.props;
        switch (this.state.modal) {
            case modalTypes.TIME_SHIFT:
                return (
                    <CreateTimeShift
                        hideModal={this.hideModal}
                        createTimeShift={oooActions.createTimeShift}
                        employees={employees} />
                );
            case modalTypes.VACATION:
                return (
                    <CreateVacation
                        employees={employees}
                        hideModal={this.hideModal}
                        createVacation={oooActions.createVacation} />
                );
            case modalTypes.BUSINESS_LEAVE:
                return (
                    <CreateBusinessLeave
                        employees={employees}
                        hideModal={this.hideModal}
                        createBusinessLeave={oooActions.createBusinessLeave} />
                );
            case modalTypes.UNPAID:
                return (
                    <CreateUnpaid
                        employees={employees}
                        hideModal={this.hideModal}
                        createUnpaid={oooActions.createUnpaid} />
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <AddRequestButton
                    iconName="location-arrow"
                    text="Create time shift"
                    onPress={() => this.openModal(modalTypes.TIME_SHIFT)}/>
                <AddRequestButton
                    iconName="plane"
                    text="Create vacation"
                    onPress={() => this.openModal(modalTypes.VACATION)} />
                <AddRequestButton
                    iconName="globe"
                    text="Create business leave"
                    onPress={() => this.openModal(modalTypes.BUSINESS_LEAVE)} />
                <AddRequestButton
                    iconName="credit-card"
                    text="Create unpaid"
                    onPress={() => this.openModal(modalTypes.UNPAID)} />

                <Modal
                    animationType="slide"
                    transparent={false}
                    onRequestClose={this.hideModal}
                    visible={!!this.state.modal}>
                    {this.oooForm}
                </Modal>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30
    }
});

export default connect(
    state => ({
        employees: state.employees.list
    }),
    dispatch => ({
        oooActions: bindActionCreators(oooActions, dispatch),
    })
)(AddOOO);
