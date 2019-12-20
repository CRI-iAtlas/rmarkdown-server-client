import React from 'react';
import { SideBar } from './SideBar'
import { usePage } from '../Redux/Page'
import { Layout } from 'antd'
import './App.css';
import { pageToKey } from './Lib'
import { AppHeader } from './AppHeader'
import { Page } from './Page'

export const App = () => {
  const page = usePage()
  return <Layout style={{ height: "100vh" }}>
    <AppHeader>CRI iAtlas Portal</AppHeader>
    <Layout>
      <Layout.Sider width="250px">
        <SideBar />
      </Layout.Sider>
      <Page key={pageToKey(page)} page={page} />
    </Layout>
  </Layout>
}