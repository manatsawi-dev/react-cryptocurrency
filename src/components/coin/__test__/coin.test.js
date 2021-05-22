/* eslint-disable no-console */
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Coin from '../index';
import {coin} from '../../../../__mock__/coin';

describe('<Coin/>', () => {
  const origConsole = console.error;
  beforeEach(() => {
    console.error = () => {};
  });
  afterEach(() => {
    console.error = origConsole;
  });

  it('render Coin snapshot correctly', () => {
    const wrapper = renderer.create(
      <Coin
        image={coin.image}
        coinName={coin.name}
        coinSymbol={coin.symbol}
        price={coin.current_price}
        volume={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}
        marketCap={coin.market_cap}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renderer Coin check props correctly', () => {
    const wrapper = shallow(<Coin />);
    expect(wrapper.find('div').length).toEqual(0);
  });

  it('renderer Coin invalid props type correctly', () => {
    const wrapper = shallow(
      <Coin
        image={coin.image}
        coinName={coin.name}
        coinSymbol={coin.symbol}
        price="ABC"
        volume={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}
        marketCap={coin.market_cap}
      />,
    );
    expect(wrapper.find('div').length).toEqual(0);
  });

  it('render Coin correctly', () => {
    const wrapper = shallow(
      <Coin
        image={coin.image}
        coinName={coin.name}
        coinSymbol={coin.symbol}
        price={coin.current_price}
        volume={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}
        marketCap={coin.market_cap}
      />,
    );
    expect(wrapper.find('#coin-row').length).toEqual(1);
    expect(wrapper.find('#coin-image').length).toEqual(1);
    expect(wrapper.find('#coin-name').length).toEqual(1);
    expect(wrapper.find('#coin-symbol').length).toEqual(1);
    expect(wrapper.find('#coin-volume').length).toEqual(1);
    expect(wrapper.find('#coin-change').length).toEqual(1);
    expect(wrapper.find('#coin-market-cap').length).toEqual(1);

    wrapper.setProps({coinName: 'NewCoin'});
    expect(wrapper.find('#coin-name').text()).toEqual('NewCoin');
  });
});
