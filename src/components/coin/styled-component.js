import styled from 'styled-components';

export const CoinWrapper = styled.div`
  max-width: 1000px;
  min-width: 430px;
`;

export const CoinContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const CoinImage = styled.img`
  height: 40px;
  width: 40px;
`;

export const CoinName = styled.p`
  width: 150px;
  padding: 1rem;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const CoinHead = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinSymbol = styled.p`
  width: 100px;
  @media (max-width: 920px) {
    padding: 1rem;
  }
`;

export const CoinCurrentPrice = styled.p`
  width: 110px;
  text-align: end;
`;

export const CoinVolume = styled.p`
  width: 150px;
  text-align: end;
  @media (max-width: 560px) {
    display: none;
  }
`;

export const CoinChange = styled.p`
  color: ${(props) => (props.increse ? 'green' : 'red')};
  width: 100px;
  text-align: end;
`;

export const CoinMarketCap = styled.p`
  width: 240px;
  text-align: end;
  @media (max-width: 790px) {
    display: none;
  }
`;
