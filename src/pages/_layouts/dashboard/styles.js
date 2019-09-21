import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  border: solid 3px red;
`;

export const Container = styled.div`
  border: 2px solid yellow;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: solid 1px purple;
`;
