import React, {Component, PropTypes} from 'react';
import {ListView, View, Text, StyleSheet} from 'react-native';
import Separator from './Separator';
import OOOListItem from './OOOListItem';
import Title from './Title';

export default class OOOList extends Component {

    static propTypes = {
        timeShifts: PropTypes.array.isRequired,
        vacations: PropTypes.array.isRequired,
        businessLeaves: PropTypes.array.isRequired,
        unpaids: PropTypes.array.isRequired,
    };

    static sections = {
        timeShifts: 'Time shifts',
        vacations: 'Vacations',
        businessLeaves: 'Business leaves',
        unpaids: 'Unpaids'
    };
    static icons = {
        'Time shifts': 'location-arrow',
        'Vacations': 'plane',
        'Business leaves': 'globe',
        'Unpaids': 'credit-card'
    };

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (r1, r2) => r1 !== r2
        });
    }

    getData() {
        const {sections} = this.constructor;
        const {timeShifts, vacations, businessLeaves, unpaids} = this.props;
        return {
            [sections.timeShifts]: timeShifts,
            [sections.vacations]: vacations,
            [sections.businessLeaves]: businessLeaves,
            [sections.unpaids]: unpaids
        };
    }

    render() {
        return (
            <View>
                <ListView
                    renderSeparator={(sec, i) => <Separator key={`${sec}:${i}`} />}
                    renderRow={(rowData, sec, i) => (
                        <OOOListItem
                            key={`${sec}:${i}`}
                            iconName={this.constructor.icons[sec]}
                            ooo={rowData} />
                    )}
                    renderSectionHeader={(sectionData, section) => <Title text={section} />}
                    dataSource={this.ds.cloneWithRowsAndSections(this.getData())}
                    enableEmptySections />
            </View>
        );
    }

}

const styles = StyleSheet.create({

});

