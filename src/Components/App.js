import React from 'react';
import { SideBar } from './SideBar'
import { usePage } from '../Redux/Page'
import { Layout } from 'antd'
import './App.css';
import { pageToKey } from './Lib'
import { AppHeader } from './AppHeader'
import { Page } from './Page'
import { usePageParams } from '../Redux/PageParams'

export const App = () => {
  const page = usePage()
  const params = usePageParams()
  return <Layout style={{ height: "100vh" }}>
    <AppHeader>CRI iAtlas Portal</AppHeader>
    <Layout>
      <Layout.Sider width="250px">
        <SideBar />
      </Layout.Sider>
      {params && <Page key={pageToKey(page)} page={page} params={params} />}
    </Layout>
  </Layout>
}