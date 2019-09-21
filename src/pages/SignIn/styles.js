import styled from 'styled-components';
import theme from '../../styles/theme';
import bgLight from '../../assets/images/bg-pattern-light.svg';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;

  p {
    align-self: center;
    margin-top: 18px;
    color: ${theme.text};

    strong {
      margin-left: 10px;
      font-weight: 700;

      a {
        color: ${theme.text};
      }
    }
  }
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  border-radius: 4px;
  background: white;
  min-width: 470px;
  height: 520px;
`;

export const SignInHeader = styled.div`
  background: ${theme.primaryGradient};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 10px;

  img {
    margin-top: -4px;
  }
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
    color: ${theme.text};
  }
  p {
    align-self: center;
    margin-bottom: 35px;
    color: ${theme.text};
  }
  input {
    margin-bottom: 15px;
    height: 37px;
    padding-left: 12px;
    border-radius: 3px;
    outline: 0;
    border: solid 1px rgba(0, 0, 0, 0.1);
    color: ${theme.text};
  }
  
  button {
    margin-bottom: 4px;
    background: ${theme.primary};
    height: 35px;
    width: 70px;
    color: #fff;
    align-self: center;
    font-weight: 700;
  }
`;
