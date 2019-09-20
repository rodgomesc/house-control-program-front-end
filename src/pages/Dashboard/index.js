import React from 'react';
import { SideBar, Header, Footer } from '../../components';

import { Container, Wrapper, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <SideBar />

      <Wrapper>
        <Header />
        <Content>
          <h1>hello from content</h1>
        </Content>
        <Footer />
      </Wrapper>
    </Container>
  );
}
