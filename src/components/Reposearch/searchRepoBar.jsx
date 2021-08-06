import {React,useContext,useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { device } from '../devices/device';

import { GithubRepoContext } from '../context/repoContext';
import languages from '../../assets/lang';

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

const Select = styled.select`
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
  max-width: 100px;
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
  padding: 2px;

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
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState('Javascript')
  const [created, setCreated] = useState('2016-05-12')
  
  const { isLoading, searchGithubRepo} = useContext(GithubRepoContext);

  // get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (language) {
      const stars=1000;
      searchGithubRepo({topic,language,created,stars});
    }
  };

  return (
      <Container >
        <Form onSubmit={handleSubmit}>
          <InputContainer >
            <Field>
              <Input
                type='text'
                placeholder='Topic'
                required
                onChange={(e) => setTopic(e.target.value)}
              />
              <Icon>
                <FontAwesomeIcon icon={faSearch} />
              </Icon>
            </Field>

            <Field>
              <Description>Language</Description>
              <Select className="sm" required value={language} onChange={(e) => setLanguage(e.target.value)}>
                  {languages.map((lang,ind) => {
                   
                    return(<option value={lang} key={ind}>{lang}</option>)
                  })}
              </Select>
            </Field>

            <Field>
              <Description>Created after</Description>
              <Input
                type='date'
                placeholder='Created After'
                defaultValue="2016-05-12"
                className='sm'
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

