import React from 'react'
import styled from 'styled-components';

import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/footer/footer';
import { Page,InnerPage } from '../../components/Page_Comp/page';
import { Link } from 'react-router-dom';
import github from '../../images/github.png'
import repo from '../../images/repo.jpg'
import { Margin } from '../../components/margin/margin';
import { device } from '../../components/devices/device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
  width: 300px;
  min-height: 250px;
  margin:1em;
  background-color: #fff;
  box-shadow: 9px -11px 31px -10px rgba(0,0,0,0.56);
  display:flex;
  flex-direction:column;
  margin-bottom: 1em;
  overflow:hidden;
  transition: all 250ms ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
  
`;

const TopContainer = styled.div`
  width:100%;
`;

const ImageContainer = styled.div`
  width:100%;
  height:18em;

  img{
    height:100%;
    width:90%;
  }
  .w100{
    width: 100%;
  }
`;


const ContentContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  flex:1;
  padding: 10px 10px;
`;

const Cards = styled.div`
  width:100%;
  height: 100%;
  margin-top: 50px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:${device.mobile}px){
    margin-top: 0;
  }
`;

const DetailContainer = styled.div`
  display:flex;
  align-items:center;
  @media screen and (max-width:${device.mobile}px){
    flex-direction: column;
  }
`;

const RepoName = styled.h2`
  margin:0;
  font-size: 20px;
  text-transform:uppercase;
  font-weight: 600;
  color: #000;
  text-align:center;
`;

const Description = styled.h4`
  margin:0;
  font-size: 12px;
  text-transform:capitalize;
  color:#000;
  font-weight:400;
`;

const Title = styled.h1`
  font-weight:900;
  color:#000;

  @media screen and (max-width:${device.mobile}px){
    font-size: 18px;
  }
`;

const Linker = styled(Link)`
  text-decoration: none;
`;
export default function Search() {
  return (
    <Page>
      <Navbar bgColor={'#3f495f'} ShowContact={true}/>
      <InnerPage height={83}>
        <Cards>
          <Title>Select the category to Search  <FontAwesomeIcon icon={faSearch}/></Title>
          <DetailContainer>
            <CardContainer>
              <TopContainer>
                <Linker to="/users" >
                  <ImageContainer>
                    <img src={github} alt={"log"}/>
                  </ImageContainer>
                </Linker>
              </TopContainer>
              <Margin direction="stand" margin={10}/>
              <ContentContainer>
                <Linker to="/users" >
                  <RepoName>Users</RepoName>
                </Linker>
                <Margin direction="stand" margin={10}/>
                <Description>Find Users using various criteria including Location. Happy search</Description>
                <Margin direction="stand" margin={10}/>  
              </ContentContainer>
            </CardContainer>
            <CardContainer>
              <TopContainer>
                <Linker to="/repo" >
                  <ImageContainer>
                    <img src={repo} alt={"log"} className="w100"/>
                  </ImageContainer>
                </Linker>
              </TopContainer>
              <Margin direction="stand" margin={10}/>
              <ContentContainer>
                <Linker to="/repo" >
                  <RepoName>Repositories</RepoName>
                </Linker>
                <Margin direction="stand" margin={10}/>
                <Description>Find repositories using various criteria. Everything in a well Organised Manner. Happy search </Description>
                <Margin direction="stand" margin={10}/>
              </ContentContainer>
            </CardContainer>
          </DetailContainer>
        </Cards>
      </InnerPage>
      <Footer/>
    </Page>
  )
}
