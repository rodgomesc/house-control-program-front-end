import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/tecmar.png';
import history from '../../services/history';
import {
  Container,
  SignInHeader,
  Wrapper,
  BgImage,
  SignInContent
} from './styles';

export default function SignIn() {
  function handleLogin() {
    history.push('/dashboard');
  }
  return (
    <BgImage>
      <Container>
        <Wrapper>
          <SignInHeader>
            <img src={logo} alt="logo" />
            <h1>Sistema Ação Social</h1>
          </SignInHeader>
          <SignInContent>
            <h2>Bem Vindo</h2>
            <p>Entre com email e senha para acessar o painel administrativo</p>
            <input placeholder="Entre com seu usuário" type="text" />
            <input placeholder="Entre com sua senha" type="text" />
            <button onClick={handleLogin}>Login</button>
            <p id="register">
              Não tem uma conta?
              <strong>
                <Link to="/register">Me registrar</Link>
              </strong>
            </p>
          </SignInContent>
        </Wrapper>

      </Container>
    </BgImage>
  );

}
