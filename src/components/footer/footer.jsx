import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Brand from '../Brand/brand';
import {faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import { Margin } from '../margin/margin';
import { useMediaQuery } from 'react-responsive'
import { device } from '../devices/device';


const FooterContainer = styled.div`
  width:100%;
  min-height:60px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 10px;

  border-top: .5px solid hsl(0, 0%, 90%);
`;

const DetailContainer = styled.div`
  display:flex;
`;

const SocialContainer = styled.div`
  display:flex;
`;

const Icon = styled.div`
  color: #aaaaaa;
  font-size: 25px;
  cursor:pointer;
  transition: all 200ms ease-in-out;
  &:hover{
    color: #111111;
  }
`;

const AboutMe = styled.h4`
  // margin:0;
  color:#aaaaaa;
  font-size: 10px;
  margin-left:10px;
`;

const Linker = styled.a`
  text-decoration:none;
`;



export default function Footer() {

  const mobile = useMediaQuery({maxWidth: device.mobile});

  return (
    <FooterContainer >
      <DetailContainer>
        <Brand  TextSize={ mobile?15:20} Color={'#aaaaaa'} HideLogo/>
        <AboutMe> &#169; Developed By Saisrini💜</AboutMe>
      </DetailContainer>
      <SocialContainer>
        <Linker href="https://twitter.com/saisrinivenkat_?s=09" target="_blank"> 
          <Icon>
            <FontAwesomeIcon icon={faTwitter} size={mobile?'sm':'1x'}/>
          </Icon>
        </Linker>
        <Margin direction="sit" margin={10}/>
        <Linker href="https://www.linkedin.com/in/saivenkat-srini-229384191/" target="_blank"> 
        <Icon>
          <FontAwesomeIcon icon={faLinkedin} size={mobile?'sm':'1x'}/>
        </Icon>
        </Linker>
        <Margin direction="sit" margin={10}/>
        <Linker href="https://github.com/Saisrinivenkat" target="_blank"> 
        <Icon>
          <FontAwesomeIcon icon={faGithub} size={mobile?'sm':'1x'}/>
        </Icon>
        </Linker>
      </SocialContainer>
    </FooterContainer>
  )
}
