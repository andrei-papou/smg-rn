import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, StyleSheet, Modal} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as employeeActions from '../../src/actions/employees';
import EmployeeList from '../components/EmployeeList';
import EmployeeDetail from '../components/EmployeeDetail';


class Employees extends Component {

    static propTypes = {
        employeeActions: PropTypes.object.isRequired,

        employeeList: PropTypes.array,
        employeeObject: PropTypes.object,
    };

    componentDidMount() {
        this.props.employeeActions.getEmployees();
    }

    selectEmployee = id => {
        const {employeeList, employeeActions} = this.props;
        employeeActions.selectEmployee(employeeList, id);
    };

    dropEmployee = () => {
        this.props.employeeActions.dropEmployee();
    };

    navIconClick = () => {
      const {openDrawer} = this.props;
      openDrawer && openDrawer();
    };

    render() {
        const {employeeList, employeeObject} = this.props;

        return (
            <View style={styles.container}>
                {employeeList && <EmployeeList showDetail={this.selectEmployee} employees={employeeList} />}
                <Modal
                    animationType="slide"
                    transparent={false}
                    onRequestClose={this.dropEmployee}
                    visible={!!employeeObject}>
                    {
                        employeeObject && <EmployeeDetail
                                              data={employeeObject}
                                              closeSection={this.dropEmployee} />
                    }
                </Modal>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default connect(
    state => ({
        employeeList: state.employees.list,
        employeeObject: state.employees.object,
    }),
    dispatch => ({
        employeeActions: bindActionCreators(employeeActions, dispatch),
    })
)(Employees);
