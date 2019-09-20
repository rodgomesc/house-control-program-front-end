import React from 'react';

import {
  Container,
  SignInHeader,
  Wrapper,
  BgImage,
  SignInContent,
  Form
} from './styles';

export default function SignIn() {
  return (
    <BgImage>
      <Container>
        <Wrapper>
          <SignInHeader>
            <h1>House Control Program</h1>
          </SignInHeader>
          <SignInContent>
            <h2>login</h2>
            <p>Entre com email e senha para acessar o painel administrativo</p>
            <input placeholder="Entre com seu usuário" type="text" />
            <input placeholder="Entre com sua senha" type="text" />
            <button>Login</button>
          </SignInContent>
        </Wrapper>
      </Container>
    </BgImage>
  );
}
