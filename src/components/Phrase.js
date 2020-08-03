import React, { Fragment } from "react";

const Phrase = ({ phrase }) => {
  
  return (
  
    <Fragment>
      <h1> {phrase.quote}</h1>
      {/* <p>{phrase.author}</p> */}
    </Fragment>
  );
};

export default Phrase;
