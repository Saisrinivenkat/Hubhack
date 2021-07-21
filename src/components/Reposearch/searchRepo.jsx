import {React,useContext} from 'react'

import SearchRepoInfo from './searchInfo'
import styled from 'styled-components';
import SearchBar from '../Reposearch/searchRepoBar';
import { device } from '../devices/device';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { GithubRepoContext } from '../context/repoContext';
import Repo from '../Items/repo';
import { useMediaQuery } from 'react-responsive';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WidthReducer = styled.div`
  padding: 1em;
  width: 80%;
`;

const InfoBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 30px 0;
  padding: 0 5px;
  background-color: #d5e2f4;
`;

const Field = styled.div`
  height: 100%;
  padding-right: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width:${device.mobile}px){
    padding-right: 10px;
    width: 100%;
  }
  
  &:focus{
    border :1.8px solid rgba(0, 0, 0, 0.3);
  }

`;

const Icon = styled.div`
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #979191;
  font-size: 18px;
  cursor:pointer;

  @media screen and (max-width:${device.mobile}px){
    font-size:8px;
    padding: 6px;
  }
`;

const Description = styled.h4`
  margin:0;
  font-size: 12px;
  color:#000;
  font-weight:400;
  text-align:center;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction:column;
`;


const ErrorText = styled.h2`
  color: hsl(0, 0%, 60%);
  font-weight: 400;
  font-size: 20px;
`;



export default function SearchRepo() {

  const isMobile = useMediaQuery({maxWidth:device.mobile});

  const {githubRepo,isLoading,error} = useContext(GithubRepoContext);

  const isEmptyRepo = !githubRepo || (githubRepo.length === 0 && githubRepo);
  
  return (
    <Container>
      <WidthReducer>
        <SearchRepoInfo />
        <SearchBar />
        <InfoBar>
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowUp}/> </Icon>
            <Description>S.No</Description>
          </Field>
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>User</Description>
          </Field>
          { !isMobile && (<Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>Forks</Description>
          </Field>)}
          { !isMobile && (<Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>Issues</Description>
          </Field>)}
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>Profile</Description>
          </Field>
        </InfoBar>
        <UserContainer>
          { isEmptyRepo && !isLoading && <ErrorText>{error.show?error.msg:"No Repos Found"}</ErrorText>}
          { isLoading &&  <ErrorText>Loading...</ErrorText>}
          { !isEmptyRepo && !isLoading && githubRepo.map((useritem,ind)=> {
            return(<Repo key={ind} {...useritem} ind={ind+1} />)
          })}
        </UserContainer>
      </WidthReducer>

    </Container>
  )
}
