import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";
import Title from "./components/Title";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #fcc244 0%,
    #fac138 40%,
    #f3be38 100%
  );
  background-size: 300px;
  border-radius: 2rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
`;

function App() {
  // State of phrases
  const [phrase, setPhrase] = useState({});

  const consultAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const phrase = await api.json();
    setPhrase(phrase[0]);
  };

  // Upload a phrase
  useEffect(() => {
    consultAPI();
  }, []);

  return (
    <Container>
      <Title />
      <Phrase phrase={phrase} />
      <Button onClick={consultAPI}>Get phrase</Button>
    </Container>
  );
}

export default App;
