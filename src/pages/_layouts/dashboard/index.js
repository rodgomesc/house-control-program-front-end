import React from 'react';
import { SideBar, Header, Footer } from '../../../components';

import { Wrapper, Content, Container } from './styles';

export default function Dashboard({ children }) {
  return (
    <Wrapper>
      <SideBar />
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </Wrapper>
  );
}
