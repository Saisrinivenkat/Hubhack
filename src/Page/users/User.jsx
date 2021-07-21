import React from 'react'

import { InnerPage, Page } from '../../components/Page_Comp/page'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar/navbar'
import SearchUser from '../../components/Usersearch/searchuser'
import { GithubProvider } from '../../components/context/userContext';

export default function User() {
  return (
    <Page>
      <Navbar bgColor={'#3f495f'} ShowContact/>
      <InnerPage height={83}>
        <GithubProvider>
          <SearchUser/>
        </GithubProvider>
      </InnerPage>
      <Footer/>
    </Page>
  )
}
