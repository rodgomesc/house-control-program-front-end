import styled from 'styled-components';
import theme from '../../styles/theme';
import bgLight from '../../assets/images/bg-pattern-light.svg';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 30px;
  height: 100%;

  display: flex;
  flex-direction: column;

  p {
    align-self: center;
    margin-top: 18px;
    padding-bottom: 10px;
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
  h1 {
    padding-right: 20px;
  }

  img {
    padding-left: 10px;
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

  #register {
    align-self: center;
    margin-top: 65px;
    color: ${theme.text};
  }

  h2 {
    align-self: center;
    margin-bottom: 8px;
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
    margin-top: 10px;
    background: ${theme.primary};
    height: 35px;
    width: 100%;
    color: #fff;
    align-self: center;
    font-weight: 700;
  }
`;
