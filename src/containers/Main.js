import React, {Component, PropTypes} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Employees from './Employees';
import OutOfOffice from './OutOfOffice';
import AddOOO from './AddOOO';
import {ACCENT_COLOR} from '../styles/global';

export default () => (
    <ScrollableTabView
        tabBarBackgroundColor={ACCENT_COLOR}
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="#fff"
        tabBarUnderlineStyle={{backgroundColor: '#fff'}}>
        <Employees tabLabel="Employees" />
        <OutOfOffice tabLabel="Out of Office" />
        <AddOOO tabLabel="OOO Request" />
    </ScrollableTabView>
);