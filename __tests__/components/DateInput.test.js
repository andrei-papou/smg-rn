import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {DateInput} from '../../src/components/form';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import * as globalStyles from '../../src/styles/global';


const validProps = {
    input: {
        name: 'username',
        onChange: () => null,
        value: ''
    },
    meta: {
        active: false,
        asyncValidating: false,
        autofilled: false,
        dirty: false,
        dispatch: () => null,
        error: undefined,
        form: "login-form",
        initial: undefined,
        invalid: true,
        pristine: true,
        submitFailed: false,
        submitting: false,
        touched: false,
        valid: true,
        visited: false,
        warning: undefined
    }
};


describe('<DateInput />', () => {

    it('renders correctly (snapshot test)', () => {
        const tree = renderer.create(
            <DateInput {...validProps} />
        );
    });

    it('is based on touchable opacity component', () => {
        const wrapper = shallow(<DateInput {...validProps} />);
        expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
        expect(wrapper.find(Text)).toHaveLength(1);
    });

    it('renders label', () => {
        const wrapper = shallow(<DateInput {...validProps} label='Some label' />);
        const textComponents = wrapper.find(Text);
        expect(textComponents).toHaveLength(2);
    });

    it('renders error', () => {
        const wrapper = shallow(
            <DateInput {...validProps}
                meta={{
                       ...validProps.meta,
                       error: 'Some error',
                       valid: false,
                       touched: true
                   }} />
        );
        const errorComponent = wrapper.find(Text);
        expect(errorComponent).toHaveLength(2);
    });

});
