import React from 'react';
import { SideBar } from './SideBar'
import { usePage } from '../Redux/Page'
import { Layout } from 'antd'
import './App.css';

import { AppHeader } from './AppHeader'

const { Sider, Content } = Layout

export const App = () =>
  <Layout style={{ height: "100vh" }}>
    <AppHeader>CRI iAtlas Portal</AppHeader>
    <Layout>
      <Sider width="250px">
        <SideBar />
      </Sider>
      <Content>
        <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" src={usePage()} />
      </Content>
    </Layout>
  </Layout>
