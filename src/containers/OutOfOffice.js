import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as oooActions from '../actions/ooo';
import OOOList from '../components/OOOList';

class OutOfOffice extends Component {

    static propTypes = {
        timeShifts: PropTypes.array.isRequired,
        vacations: PropTypes.array.isRequired,
        businessLeaves: PropTypes.array.isRequired,
        unpaids: PropTypes.array.isRequired,
        oooActions: PropTypes.object.isRequired
    };

    componentDidMount() {
        const {oooActions} = this.props;
        oooActions.getTimeShifts();
        oooActions.getVacations();
        oooActions.getBusinessLeaves();
        oooActions.getUnpaids();
    }

    render() {
        const {timeShifts, vacations, businessLeaves, unpaids} = this.props;
        return (
            <View style={styles.container}>
                <OOOList
                    timeShifts={timeShifts}
                    vacations={vacations}
                    businessLeaves={businessLeaves}
                    unpaids={unpaids} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    }
});

export default connect(
    state => ({
        timeShifts: state.ooo.timeShift,
        vacations: state.ooo.vacation,
        businessLeaves: state.ooo.businessLeave,
        unpaids: state.ooo.unpaid
    }),
    dispatch => ({
        oooActions: bindActionCreators(oooActions, dispatch)
    })
)(OutOfOffice);
