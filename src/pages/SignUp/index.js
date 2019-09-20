import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/tecmar.png';
import history from '../../services/history';
import {
  Container,
  SignUpHeader,
  Wrapper,
  BgImage,
  SignUpContent
} from './styles';

export default function SignUp() {
  function handleLogin() {
    history.push('/dashboard');
  }
  return (
    <BgImage>
      <Container>
        <Wrapper>
          <SignUpHeader>
            <img src={logo} height="48" alt="logo" />
            <h1>House Control Program</h1>
          </SignUpHeader>
          <SignUpContent>
            <h2>login</h2>
            <p>Entre com email e senha para acessar o painel administrativo</p>
            <input placeholder="Entre com seu nome completo" type="text" />
            <input placeholder="Digite um usuário" type="text" />
            <input placeholder="Digite uma senha" type="password" />
            <input placeholder="Confirme a senha" type="password" />
            <button onClick={handleLogin}>Criar Conta</button>
          </SignUpContent>
        </Wrapper>
        <p>
          Já tem uma conta?
          <strong>
            <Link to="/">Fazer login</Link>
          </strong>
        </p>
      </Container>
    </BgImage>
  );
}
