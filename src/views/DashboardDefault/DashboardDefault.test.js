import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';


import DashboardDefault from './DashboardDefault';
import Gadget from './components/Gadget';

describe('<DashboardDefault />', () => {

    it('renders three <Gadget /> components', () => {
        const wrapper = shallow(<DashboardDefault />);
        expect(wrapper.find(Gadget)).to.have.lengthOf(3);
    });
});