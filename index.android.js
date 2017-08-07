import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './src/containers/App';

const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest

XMLHttpRequest = _XHR

AppRegistry.registerComponent('smg', () => App);
