/* eslint-disable no-console */
import React from 'react';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../index';

describe('<Header/>', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  it('renderer Header snapshot correcly', () => {
    const wrapper = renderer.create(<Header>Head</Header>);
    expect(wrapper).toMatchSnapshot();
  });
  it('renderer Header check props correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toEqual(0);
  });
  it('renderer Header invalid props correctly', () => {
    const wrapper = shallow(
      <Header>
        <a>Head</a>
      </Header>,
    );
    expect(wrapper.find('h1').length).toEqual(0);
  });
  it('renderer Header correctly', () => {
    const wrapper = mount(<Header>Head</Header>);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.text()).toEqual('Head');
  });
  it('render Header set props correctly', () => {
    const wrapper = mount(<Header>Head</Header>);
    wrapper.setProps({variant: 'h3'});
    expect(wrapper.props().variant).toEqual('h3');
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.text()).toEqual('Head');
  });
});
