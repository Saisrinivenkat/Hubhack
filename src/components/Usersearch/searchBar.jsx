import {React,useContext,useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { device } from '../devices/device';

import { GithubContext } from '../context/userContext';

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media screen and (max-width:${device.mobile}px){
   flex-direction: column;
   .sm{
      font-size: 10px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  border-radius: 3px;
  font-size:15px;
  border: none;
  outline: none;
  color: #1d1d1d;
  background-color: none;
`;

const Button = styled.button`
  height: 100%;
  font-family: "Helvetica Neue";
  font-size: ${ ({ size }) => size?size + 'px': "18px" };
  padding: 5px 1em;
  border:none;
  border-radius: 3px;
  font-weight: 550;
  outline: none;
  cursor:pointer;
  transition: all 200ms ease-in-out;

  background-color: #5c6bc0;
  color:#ffffff;

  &:hover{
    filter: contrast(.8); 
  }

  &:focus{
    outline:none;
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
  transition: all 200ms ease-in-out;
`;

const Field = styled.div`
  height: 100%;
  
  display: flex;
  align-items: center;
  border :1px solid rgba(70,69,71,.3);
  border-radius: 4px;

  @media screen and (max-width:${device.mobile}px){
   width: 100%;
   margin: 6px;
  }
  
  &:focus{
    border :1.8px solid rgba(0, 0, 0, 0.3);
  }
  
`;
const Description = styled.h4`
  margin:0;
  font-size: 12px;
  color:#000;
  font-weight:400;
  text-align:center;
`;



export default function SearchBar(){
  const [user, setUser] = useState('');
  const [location, setLocation] = useState('')
  const [created, setCreated] = useState('2016-05-12')
  
  const { isLoading, searchGithubUser} = useContext(GithubContext);

  // get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      // more logic coming up soon
      searchGithubUser({user,location,created});
      //optional
      // setUser('');
    }
  };
  return (
      <Container className='section-center'>
        <Form onSubmit={handleSubmit}>
          <InputContainer className='form-control'>
            <Field>
              <Input
                type='text'
                placeholder='Username'
                required
                onChange={(e) => setUser(e.target.value)}
              />
              <Icon>
                <FontAwesomeIcon icon={faSearch} />
              </Icon>
            </Field>

            <Field>
              <Input
                type='text'
                placeholder='Location'
                onChange={(e) => setLocation(e.target.value)}
              />
              <Icon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Icon>
            </Field>

            <Field>
              <Description>Created after</Description>
              <Input
                type='date'
                placeholder='Created After'
                defaultValue="2016-05-12"
                className="sm"
                onChange={(e) => setCreated(e.target.value)}
              />
            </Field>
            {!isLoading && (  
              <Button type='submit'>Search</Button>
            )}
          </InputContainer>
        </Form>
      </Container>
  );
};

