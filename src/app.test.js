import React from 'react';
import * as enzyme from 'enzyme'
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = enzyme.mount(<App />, { attachTo: div });
    expect(wrapper.find(App)).toHaveLength(1);
});