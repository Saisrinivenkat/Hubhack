import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'

import { device } from '../devices/device';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive';
import { Margin } from '../margin/margin';

const UserContainer = styled.div`
  width: 100%;
  padding: 1em;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 3px rgba(0,0,0,0.2);

  @media screen and (max-width:${device.mobile}px){
    padding: .3em;
  }
`;

const Number = styled.h1`
  padding: 1em;
  font-family: sans-serif;
  margin:0;
  font-size: 25px;
  font-weight: 300;
  cursor: pointer;
  color:#000;

  @media screen and (max-width:${device.mobile}px){
    font-size: 15px;
    padding: .3em;
  }
`;

const MiddleContainer=styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 5em;
  height: 100%;
  display: flex;
  align-items: center;

  img{
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width:${device.mobile}px){
    width: 3em;
    height: 100%;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



const UserName = styled.h3`
  margin: 0;
  margin-left:10px;
  font-family:"Roboto";
  color:#5b5c5c;
  text-transform: capitalize;
  font-size: 17px;
  letter-spacing: .8px;
  font-weight: 550;
  text-align:left;
  cursor: pointer;

  @media screen and (max-width:${device.mobile}px){
    font-size: 12px;
  }
`;

const EndContainer = styled.div`
  height:100%;
`;

const Button = styled.button`
  height: 100%;
  width: auto;
  font-family: "Helvetica Neue";
  font-size: ${ ({ size }) => size?size + 'px': "18px" };
  padding: .4em 1em;
  border:none;
  border-radius: 3px;
  font-weight: 450;
  outline: none;
  cursor:pointer;
  border: 1px solid #0a66c2;
  transition: all 250ms ease-in-out;

  background-color: #fff;
  color:#0a66c2;

  &:hover{
    background-color: #0a66c2;
    color: #fff;
    transform: scale(1.1);
  }

  &:focus{
    outline:none;
  }

  @media screen and (max-width:${device.mobile}px){
    padding: .4em 1em;
    font-size : 8px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;


const Count = styled.h2`
  margin:0;
  font-size: 12px;
  font-weight:550;
  color:#000;
`;
const Description = styled.h4`
  margin:0;
  font-size: 10Spx;
  text-transform:capitalize;
  color:#000;
  font-weight:400;
`;

export default function Repo(props) {
  
  const isMobile = useMediaQuery({maxWidth: device.mobile});
  const { owner,name,forks,open_issues,html_url,ind } = props
  const { avatar_url,login } = owner;

  return (
    <UserContainer>
      <Number>{ind}</Number>
      <MiddleContainer>
        <ImageContainer>
          <img src={avatar_url} alt="avatar" />
        </ImageContainer>
        <ContentContainer>
          <UserName>Owner: {login}</UserName>
          <Margin direction="stand" margin={6}/>
          <UserName>Repo: {name}</UserName>
        </ContentContainer>
      </MiddleContainer>
      { !isMobile && (<MiddleContainer>
      <ContentContainer>
          <Count>{forks}</Count>
          <Description>Forks</Description>
        </ContentContainer>
      </MiddleContainer>)}
      { !isMobile && (<MiddleContainer>
      <ContentContainer>
          <Count>{open_issues}</Count>
          <Description>Open_issues</Description>
        </ContentContainer>
      </MiddleContainer>)}
      <EndContainer>
        <Link href={html_url} target="_blank"><Button> <FontAwesomeIcon icon={faExternalLinkAlt}/> View Repo</Button></Link>
      </EndContainer>
    </UserContainer>
  )
}
