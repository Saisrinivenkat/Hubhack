import React from 'react'

import { InnerPage, Page } from '../../components/Page_Comp/page'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar/navbar'
import SearchRepo from '../../components/Reposearch/searchRepo'
import { GithubRepoProvider } from '../../components/context/repoContext';

export default function Repo() {
  return (
    <Page>
      <Navbar bgColor={'#3f495f'} ShowContact/>
      <InnerPage height={83}>
        <GithubRepoProvider>
          <SearchRepo/>
        </GithubRepoProvider>
      </InnerPage>
      <Footer/>
    </Page>
  )
}
