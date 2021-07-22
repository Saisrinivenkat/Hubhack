import React from 'react'
import styled from 'styled-components'

import { device } from '../../components/devices/device';
import { Margin } from '../../components/margin/margin';
import {faMapMarkerAlt,faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const Title = styled.h1`
  margin: 0;
  font-weight:900;
  color:#000;

  @media screen and (max-width:${device.mobile}px){
    font-size: 18px;
  }
`;
const HorizontalLine = styled.div`
  width: 30px;
  height: 5px;
  background-color :hsl(0, 0%, 0%);
  border-radius: 20%;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Map = styled.div`
  width: 100%;
  height: 20em;

  iframe{
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding: 10px;

  @media screen and (max-width:${device.mobile}px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  font-size: ${({ size }) => size?size+'px':'25px'};
  cursor:pointer;
  transition: all 200ms ease-in-out;
  &:hover{
    color: #111111;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;
const Subtitle = styled.h2`
  margin:0;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  text-align: left;
`;

const Description = styled.h4`
  margin:0;
  font-size: 12px;
  color:#000;
  font-weight:400;
  text-align:left;
`;


export default function Contact() {
  return (
    <ContactContainer id="contact">
      <Title>Contact</Title>
      <HorizontalLine/>
      <Margin direction="stand" margin={30}/>
      <ContentContainer>
        <Map>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3889861896873!2d80.23318811482244!3d13.010883090830102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f64332436e5f%3A0xb6f3e0a8c0889229!2sAnna%20University!5e0!3m2!1sen!2sin!4v1626766394171!5m2!1sen!2sin" title="Map" allowFullScreen="" loading="lazy"></iframe>
        </Map>
        <InfoContainer >
              <BoxWrapper >
                  <Margin direction="sit" margin={10}/>
                  <Icon size={30}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                  </Icon>
                  <Margin direction="sit" margin={30}/>
                <DetailWrapper>
                  <Subtitle>Location:</Subtitle>
                  <Description>College of Engineering, Guindy,Chennai - 600025</Description>
                </DetailWrapper>
              </BoxWrapper>
              <BoxWrapper >
                  <Icon size={30}>
                    <FontAwesomeIcon icon={faMailBulk}/>
                  </Icon>
                  <Margin direction="sit" margin={20}/>
                <DetailWrapper>
                  <Subtitle>Email:</Subtitle>
                  <Description>saisrinivenkat@outlook.com</Description>
                </DetailWrapper>
              </BoxWrapper>
        </InfoContainer>
      </ContentContainer>

    </ContactContainer>
  )
}
