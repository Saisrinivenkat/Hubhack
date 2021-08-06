import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

import FirstView from './firstview'
import {device} from '../../components/devices/device'
import { Page,InnerPage } from '../../components/Page_Comp/page'
import Navbar from '../../components/Navbar/navbar'
import Repos from './repos'
import Footer from '../../components/footer/footer'
import Contact from '../contact/contact'



const ResponsiveContainer = styled.div`
  width:100%;
  max-width: ${device.laptop}px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:1em;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  ::before{
    border-radius: 50%;
    content: '';
    position: absolute;
    border-top: 2px solid #5C5C5C;
    width: 100%;
    height: 100%;
    animation: spin .5s linear infinite;
  }

  @keyframes spin{
    to{
      transform: rotate(360deg);
    }
  }
`



export default function Home() {

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const timeout = ()=>{
      setTimeout(()=>{setLoading(false)},1500);
    }
    timeout();
  })
  return (
    <>
    { loading?
    <Spinner/>
    : 
    (<Page>
      <FirstView>
      <Navbar/>
      </FirstView>
      <InnerPage>
      <ResponsiveContainer>
      <Repos/>
      </ResponsiveContainer>
      <Contact/>
      </InnerPage>
      <Footer/>
    </Page>)
    }
    </>
  )
}
