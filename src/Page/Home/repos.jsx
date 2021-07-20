import { React,useEffect,useState } from 'react'
import styled from 'styled-components'
import Axios from 'axios';


import Card from '../../components/card/card'
import { device } from '../../components/devices/device';


const RepoContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media screen and (max-width:${device.mobile}px){
    align-items:center;
  }

`;
const Title = styled.h1`
  font-weight:900;
  color:#000;

  @media screen and (max-width:${device.mobile}px){
    font-size: 18px;
  }
`;

const RepoWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 80%;
  align-items: center;

  @media screen and (max-width:${device.mobile}px){
    width:100%;
    justify-content:center;
  }
`;

const ErrorText = styled.h2`
  color: hsl(0, 0%, 60%);
  font-weight: 400;
`;

const BottomContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
`;

const MoreButton = styled.button`
  font-family: "Helvetica Neue";
  font-size: ${ ({ size }) => size?size + 'px': "18px" };
  padding: 5px 1em;
  border:none;
  border-radius: 3px;
  font-weight: 550;
  outline: none;
  cursor:pointer;
  transition: all 200ms ease-in-out;

  background-color: #f5f5f5;
  box-shadow:  2px 2px 2px  rgba(0,0,0,0.8) ;
  color:#959595;

  &:hover{
    background-color: #f5f5f5;
    filter: contrast(.8); 
  }

  &:focus{
    outline:none;
  }
`;

const HorizontalLine = styled.div`
  width:80%;
  align-self: center;
  height: .5px;
  background-color :hsl(0, 0%, 90%);
  z-index: -5;
  transform: translateY(-15px);
`;

export default function Repos() {

  const [repositories, setRepositories] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [more, setMore] = useState(false)

  const isEmptyRepos = !repositories || (repositories.length === 0 && repositories);

  const fetchRepos = async() =>{
    setLoading(true);
    const res = await Axios.get("https://api.github.com/search/repositories?q=stars:%3E150000").catch((error) =>{ console.log('Error: ',error) })
    if(res){
      res.data.items.sort((a,b) => {
        return b.forks - a.forks
      });
      setRepositories(res.data.items);
    }
    setLoading(false);
  }

  
  useEffect(() => {
    fetchRepos();
  }, [])
  
  const WrappedRepo = more?repositories.slice(0,9):repositories.slice(0,6);

  const RepoToggle = ()=>{
    setMore(!more);
  }
  

  return (
    <RepoContainer>
      <Title>Top Repositories Right Now!</Title>
      <RepoWrapper>
        { isEmptyRepos && !Loading && <ErrorText>No Repositories Found</ErrorText> }
        { Loading && <ErrorText>Loading...</ErrorText> }

        { !isEmptyRepos && !Loading &&  WrappedRepo.map( (repo,ind) =>{
          return(<Card key = {ind} {...repo}/>)
        } )}
      </RepoWrapper>
      <BottomContainer>
        <MoreButton onClick={RepoToggle} type="button">{!more?"View More":"View Less"}</MoreButton>
      </BottomContainer>
      <HorizontalLine/>
    </RepoContainer>
  )
}
