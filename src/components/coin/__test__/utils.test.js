import {getLocalStringText, getPriceChangeText} from '../utils';

describe('getLocalString()', () => {
  it('input is not number or null', () => {
    expect(getLocalStringText(null)).toEqual(0);
    expect(getLocalStringText('AAA')).toEqual(0);
    expect(getLocalStringText(true)).toEqual(0);
  });
  it('run correctly', () => {
    expect(getLocalStringText(100)).toEqual('100');
    expect(getLocalStringText(1000)).toEqual('1,000');
    expect(getLocalStringText(1000000)).toEqual('1,000,000');
  });
});

describe('getPriceChangeText()', () => {
  it('input is not number or null', () => {
    expect(getPriceChnageText(null)).toEqual(0);
    expect(getPriceChnageText('AAA')).toEqual(0);
    expect(getPriceChnageText(true)).toEqual(0);
  });
  it('run correctly', () => {
    expect(getPriceChnageText(100)).toEqual('100.00');
    expect(getPriceChnageText(5.11254)).toEqual('5.11');
    expect(getPriceChnageText(8.27777)).toEqual('8.28');
  });
});
