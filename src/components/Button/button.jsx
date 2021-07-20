import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`


  background-color: hsl(263, 85%, 65%);
  color:#fff;
  font-family: "Helvetica Neue";
  font-size: ${ ({ size }) => size?size + 'px': "18px" };
  padding: 5px 1em;
  border-radius: 3px;
  font-weight: 550;
  outline: none;
  cursor:pointer;
  transition: all 200ms ease-in-out;

  &:hover{
    background-color: hsl(263, 85%, 45%);
  }

  &:focus{
    outline:none;
  }
`;

export default function Button(props) {

  const { size } = props;

  return (
    <ButtonContainer size = {size} className={props.className}>
      {props.children}
    </ButtonContainer>
  )
}
