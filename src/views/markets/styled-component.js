import styled from 'styled-components';

export const MarketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #1eae98;
  padding: 0 2rem 3rem 2rem;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: white;
  color: #1eae98;
  padding: 0.5rem;
  border: 1px solid transparent;
  min-width: 300px;
  border-radius: 4px;
  font-size: 20px;
  outline: none;
`;
