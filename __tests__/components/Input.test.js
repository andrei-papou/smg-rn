import {Text, View, TextInput} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Input, PasswordInput} from '../../src/components/form';
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


describe('<Input />', () => {

    it('renders correctly (snapshot test)', () => {
      const tree = renderer.create(
        <Input {...validProps} />
      );
    });

    it('is based on text input component', () => {
        const wrapper = shallow(<Input {...validProps} />);
        expect(wrapper.find(TextInput)).toHaveLength(1);
    });

    it('renders label', () => {
        const wrapper = shallow(<Input {...validProps} label='Some label' />);
        const labelComponent = wrapper.find(Text);
        expect(labelComponent).toHaveLength(1);
        expect(labelComponent.props().children).toBe('Some label');
        expect(labelComponent.props().style.color).toBe('#ccc');
    });

    it('renders error', () => {
        const wrapper = shallow(
            <Input {...validProps}
                   meta={{
                       ...validProps.meta,
                       error: 'Some error',
                       valid: false,
                       touched: true
                   }} />
        );
        const errorComponent = wrapper.find(Text);
        expect(errorComponent).toHaveLength(1);
        expect(errorComponent.props().children).toBe('Some error');
        expect(errorComponent.props().style.color).toBe(globalStyles.ACCENT_COLOR);
        expect(errorComponent.props().style.fontSize).toBe(12);
    });

});

describe('<PasswordInput />', () => {

    it('hides symbols', () => {
        const wrapper = shallow(<PasswordInput {...validProps} />);
        const input = wrapper.find(Input).shallow();
        const textInput = input.find(TextInput);
        expect(textInput).toHaveLength(1);
        expect(textInput.props().secureTextEntry).toBe(true);
    });

});
