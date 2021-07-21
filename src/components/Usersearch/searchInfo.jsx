import React from 'react'
import styled from 'styled-components';

import Github from '../../images/github.png';
import { device } from '../devices/device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble} from '@fortawesome/free-solid-svg-icons'

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  padding: 10px 10px;
`;

const ContentContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding: 10px 10px;
`;

const Title = styled.h1`
  font-weight:900;
  color:#000;
  text-align:left;
  @media screen and (max-width:${device.mobile}px){
    font-size: 18px;
  }
`;
const Description = styled.h4`
  margin:0;
  font-size: 12px;
  color:#000;
  font-weight:400;
  text-align:left;
`;

const ImageContainer = styled.div`
  width:10em;
  height:10em;
  align-self: flex-end;
  margin-right: 50px;
  img{
    height:100%;
    width:100%;
  }
  @media screen and (max-width:${device.mobile}px){
    display: none;
  }
`;

const SearchCriteria = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width:${device.mobile}px){
    padding: 0;
  }
`;

const Field = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 5px;
  @media screen and (max-width:${device.mobile}px){
    width: 100%;
    margin: 5px 0;
  }
`;

const Icon = styled.div`
  height: 100%;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979191;
  font-size: 14px;
  cursor:pointer;

  @media screen and (max-width:${device.mobile}px){
    font-size:8px;
    padding: 6px;
  }
`;

export default function SearchInfo() {

  return (
    <InfoWrapper>
      <InfoContainer>
        <ContentContainer>
          <Title>Github User Search </Title>
          <Description>Search User in a much solid way</Description>
          <SearchCriteria>
            <Field>
              <Icon> <FontAwesomeIcon icon={faCheckDouble}/> </Icon>
              <Description>Username *required</Description>
            </Field>
            <Field>
              <Icon> <FontAwesomeIcon icon={faCheckDouble}/> </Icon>
              <Description>Location(Optional)</Description>
            </Field>
            <Field>
              <Icon> <FontAwesomeIcon icon={faCheckDouble}/> </Icon>
              <Description>Created(Optional)</Description>
            </Field>
          </SearchCriteria>
        </ContentContainer>
        <ImageContainer>
          <img src={Github} alt="Github"/>
        </ImageContainer>
      </InfoContainer>
    </InfoWrapper>
  )
}
