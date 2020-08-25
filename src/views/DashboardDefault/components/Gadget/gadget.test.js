import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Card } from '@material-ui/core';
import { messageService } from '../../../../_services';
import RealTimeGadget from './index';

describe('<DashboardDefault />', () => {

    it('must render a card components', () => {
        const wrapper = shallow(<RealTimeGadget />);
        expect(wrapper.find(Card)).to.have.lengthOf(1);
    });

    it('must render a card components', () => {
        const wrapper = shallow(<RealTimeGadget action='temprature' title='Temprature' />);
        messageService.sendMessage({ type: 'temprature', data: 20 });
        setTimeout(() => {
            expect(wrapper.find('h3').getDOMNode().nodeValue).equals(20);
        });
    });


});