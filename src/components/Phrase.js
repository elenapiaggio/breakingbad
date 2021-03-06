import React from "react";
import styled from "@emotion/styled";

const PhraseContainer = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 5rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -3rem;
    }
  }
  
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #5e6a72;
    margin-top: 2rem;
  }
`;

const Phrase = ({ phrase }) => {
  return (
    <PhraseContainer>
      <h1> {phrase.quote} </h1>
      <p> {phrase.author} </p>
    </PhraseContainer>
  );
};

export default Phrase;
