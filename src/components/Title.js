import React from "react";
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
`;

const Header = styled.h1`
  padding: 1rem;
  font-size: 3rem;
  border-radius: .5rem;
  background-color: #FCC244;
  max-width: 800px;
`;

const SubTitle = styled.h2`
  padding: 1rem;
  font-size: 3rem;
`;

const SubTitleParagraph = styled.p`
  font-size: 4rem;
  color: white;
`;

const Title = () => {
  return (
    <Container>
      <Header>SOME TIPS TO</Header>
      <SubTitle>STOP</SubTitle>
      <SubTitleParagraph>WORRING</SubTitleParagraph>
    </Container>
  );
};

export default Title;
