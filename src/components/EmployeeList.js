import React, {Component, PropTypes} from 'react';
import {ListView} from 'react-native';
import EmployeeListItem from './EmployeeListItem';
import Separator from './Separator';

export default class EmployeeList extends Component {

    static propTypes = {
        employees: PropTypes.array.isRequired,
        showDetail: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    }

    render() {
        const {employees, showDetail} = this.props;
        return (
            <ListView
                renderSeparator={(_, i) => <Separator key={i} />}
                renderRow={(rowData, _, i) => <EmployeeListItem key={i} showDetail={showDetail} employee={rowData} />}
                dataSource={this.ds.cloneWithRows(employees)} />
        );
    }

}