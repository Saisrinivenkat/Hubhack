import React from 'react'
import styled from 'styled-components'


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

`;

const TopContainer = styled.div`
  width:100%;
`;

const ImageContainer = styled.div`
  width:100%;
  height:18em;

  img{
    height:100%;
    width:100%;
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

const BottomContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  padding: 10px;
`;

const DetailContainer = styled.div`
  display:flex;
  flex-direction:column;
  // align-items:center;
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

const Count = styled.h2`
  margin:0;
  font-size: 15px;
  font-weight:550;
  color:#000;
`;

const Linker = styled.a`
  text-decoration: none;
`;

function Card(props) {

  const { owner,name,forks,watchers,open_issues,description,html_url } = props
  const { avatar_url,login } = owner;

  return (
    <CardContainer>
      <TopContainer>
        <Linker href={html_url} target="_blank">
          <ImageContainer>
            <img src={avatar_url} alt={login}/>
          </ImageContainer>
        </Linker>
      </TopContainer>
      <ContentContainer>
        <Linker href={html_url} target="_blank">
          <RepoName>{name}</RepoName>
        </Linker>
        <Description>{description}</Description>
      </ContentContainer>
      <BottomContainer>
        <DetailContainer>
          <Count>{forks}</Count>
          <Description>Forks</Description>
        </DetailContainer>
        <DetailContainer>
          <Count>{open_issues}</Count>
          <Description>Issues</Description>
        </DetailContainer>
        <DetailContainer>
          <Count>{watchers}</Count>
          <Description>Watches</Description>
        </DetailContainer>
        
      </BottomContainer>
    </CardContainer>
  )
}

export default Card
