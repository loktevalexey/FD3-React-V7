import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const BorderedDiv = styled.div`
  border: solid red 2px;
  border-radius: 5px;
  padding: 20px;
  width: 150px;
`;

const BackgroundedDiv = styled.div`
  border-radius: 5px;
  ${ attrs => css`
    background: ${attrs.ccc==="eng"?"red":"green"};
  `}
`;

export default props => {

  const [lang, setLang] = useState('eng');

  return (
    <BorderedDiv>
      <BackgroundedDiv ccc={lang}>
        Язык: {lang}<br/>
        <button onClick={ () => setLang('eng') }>английский</button>
        <button onClick={ () => setLang('rus') }>русский</button>
      </BackgroundedDiv>
    </BorderedDiv>
  );
};
