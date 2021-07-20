import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'

import Brand from '../Brand/brand';
import { device } from '../devices/device';
import { Margin } from '../margin/margin';
import Separator from '../separator/separate';

const NavbarContainer = styled.div`
  display: flex;
  padding:.5rem;
  align-items:center;
  justify-content:space-between;
  height: 80px;
  width:100%;
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

export default function Navbar() {

  const mobile = useMediaQuery({maxWidth: device.mobile});

  return (
    <NavbarContainer>
      <Brand Logosize={mobile?'':64} TextSize={mobile?'':20}/>
      <LinkContainer>
        <Links>Home</Links>
        { !mobile && <Margin direction='sit' margin={8}/>}
        { !mobile && <Separator height={20} />}
        <Margin direction='sit' margin={8}/>
        <Links>Search</Links>
        <Margin direction='sit' margin={10}/>
        <Links>About</Links>
        <Margin direction='sit' margin={10}/>
        <Links>Contact</Links>
      </LinkContainer>
    </NavbarContainer>
  )
}
