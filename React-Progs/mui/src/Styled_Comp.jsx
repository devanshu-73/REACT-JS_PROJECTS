import React from 'react';
import styled from 'styled-components';
export default function Styled_Comp({ text, color_1 }) {
  const Btn1 = styled.button`
  color: ${color_1};
  background-color:black;
  `;
  return (
    <div>
      <Btn1>{text}</Btn1>
    </div>
  )
}
