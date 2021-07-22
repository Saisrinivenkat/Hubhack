import {React,useContext} from 'react'

import SearchInfo from './searchInfo'
import styled from 'styled-components';
import SearchBar from './searchBar';
import { device } from '../devices/device';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { GithubContext } from '../context/userContext';
import User from '../Items/user';

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
  font-size: 20px;
  font-weight: 400;
`;

export default function SearchUser() {

  const {githubUser,isLoading,error,locate} = useContext(GithubContext);

  const isEmptyUser = !githubUser || (githubUser.length === 0 && githubUser);
  
  return (
    <Container>
      <WidthReducer>
        <SearchInfo />
        <SearchBar />
        <InfoBar>
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowUp}/> </Icon>
            <Description>S.No</Description>
          </Field>
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>Users</Description>
          </Field>
          <Field>
            <Icon> <FontAwesomeIcon icon={faArrowDown}/> </Icon>
            <Description>Profile</Description>
          </Field>
        </InfoBar>
          <UserContainer>
            { isEmptyUser && !isLoading && <ErrorText>{error.show?error.msg:"No Users Found"}</ErrorText>}
            { isLoading &&  <ErrorText>Loading...</ErrorText>}
            { !isEmptyUser && !isLoading && githubUser.map((useritem,ind)=> {
              return(<User key={ind} {...useritem} ind={ind+1} Location={locate}/>)
            })}
          </UserContainer>
      </WidthReducer>

    </Container>
  )
}
