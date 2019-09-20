import styled from 'styled-components';
import bgLight from '../../assets/images/bg-pattern-light.svg';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  border-radius: 4px;
  background: white;
  min-width: 470px;
  height: 520px;
`;

export const SignInHeader = styled.div`
  background: #7380f5;
  height: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const BgImage = styled.div`
  background: url(${bgLight}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

export const SignInContent = styled.div`
  background: #fff;
  display: flex;
  margin: 28px 37px;
  flex-direction: column;

  h2 {
    align-self: center;
    margin-bottom: 8px;
  }
  p {
    align-self: center;
    margin-bottom: 35px;
  }
  input {
    margin-bottom: 15px;
    height: 35px;
    padding-left: 12px;
    border-radius: 3px;
    outline: 0;
    border: solid 1px rgba(0, 0, 0, 0.1);
  }
  button {
    margin-bottom: 4px;
    background: #7380f5;
    height: 35px;
    width: 70px;
    color: #fff;
    align-self: center;
  }
`;
