import React from 'react'
import styled from 'styled-components'

import FirstView from './firstview'
import {device} from '../../components/devices/device'
import { Page,InnerPage } from '../../components/Page_Comp/page'
import Navbar from '../../components/Navbar/navbar'
import Repos from './repos'
import Footer from '../../components/footer/footer'



const ResponsiveContainer = styled.div`
  width:100%;
  max-width: ${device.laptop}px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:1em;


`;



export default function Home() {
  return (
      <Page>
        <FirstView>
          <Navbar/>
        </FirstView>
        <InnerPage>
          <ResponsiveContainer>
            <Repos/>
          </ResponsiveContainer>
        </InnerPage>
        <Footer/>
      </Page>
  )
}
