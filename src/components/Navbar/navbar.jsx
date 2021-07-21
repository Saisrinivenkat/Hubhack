import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'

import Brand from '../Brand/brand';
import { device } from '../devices/device';
import { Margin } from '../margin/margin';
import { Link } from 'react-router-dom';
import Separator from '../separator/separate';


const NavbarContainer = styled.div`
  display: flex;
  padding:.5rem;
  align-items:center;
  justify-content:space-between;
  height: 80px;
  width:100%;
  background-color: ${({ bgColor}) => bgColor?bgColor:'none'};
`;

const LinkContainer = styled.div`
  display:flex;
  align-items:center;
  height:100%;

`;

const Links = styled.a`
  font-size: 15px;
  color: #fff;
  cursor:pointer;
  text-decoration:none;
  outline:none;
  transition: all 150ms ease-in-out;

  &:hover{
    filter:contrast(.8);
  }
  &:focus{
    filter:contrast(.8);
  }
`;

const Linker = styled(Link)`
  font-size: 15px;
  color: #fff;
  cursor:pointer;
  text-decoration:none;
  outline:none;
  transition: all 150ms ease-in-out;

  &:hover{
    filter:contrast(.8);
  }
  &:focus{
    filter:contrast(.8);
  }
`;

export default function Navbar(props) {

  const mobile = useMediaQuery({maxWidth: device.mobile});
  const { bgColor,ShowContact } = props
  return (
    <NavbarContainer bgColor={bgColor}>
      <Brand Logosize={mobile?'':64} TextSize={mobile?'':20}/>
      <LinkContainer>
        <Linker to="/">Home</Linker>
        { !mobile && <Margin direction='sit' margin={8}/>}
        { !mobile && <Separator height={20} />}
        <Margin direction='sit' margin={8}/>
        <Linker to="/search">Search</Linker>
        <Margin direction='sit' margin={10}/>
        { !ShowContact && <Links href="#contact"  >Contact</Links>}
      </LinkContainer>
    </NavbarContainer>
  )
}
