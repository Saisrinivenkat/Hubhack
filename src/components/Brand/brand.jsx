import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo.png';


const BrandContainer = styled.div`
  display:flex;
  align-items:center;
`;

const LogoImage = styled.div`
  width: ${ ({ size }) => size? size + 'px': '2rem' };
  height: ${ ({ size }) => size? size + 'px': '1.5rem' };
  
  img{
    width:100%;
    height:100%;
  }
  `;

const BrandTitle = styled.h2`
  margin:0;
  margin-left: 15px ;
  font-size: ${ ({size}) => size? size + 'px': '15px' };
  color: ${ ({ Color }) =>  Color? Color:"#fff"};
  font-weight: 900;

`;

const Linker = styled(Link)`
  text-decoration:none;
`;

export default function Brand(props) {
  const { Logosize,TextSize,Color,HideLogo } = props;
  return (
    <BrandContainer>
      <Linker to="/">
        {!HideLogo && <LogoImage size = {Logosize}>
          <img src={logo} alt="logo"/>
        </LogoImage>}
      </Linker>
      <Linker to="/">
        <BrandTitle size = {TextSize} Color = {Color}>HubHack</BrandTitle>
      </Linker>
    </BrandContainer>
  )
}
