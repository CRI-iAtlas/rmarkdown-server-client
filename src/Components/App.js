import React from 'react';
import { SideBar } from './SideBar'
import { usePage } from '../Redux/Page'
import { Layout } from 'antd'
import './App.css';

import { AppHeader } from './AppHeader'
import {Widgets} from './Widgets'

const { Sider, Content } = Layout

export const App = () => {
  const {url, params} = usePage()
  return <Layout style={{ height: "100vh" }}>
    <AppHeader>CRI iAtlas Portal</AppHeader>
    <Layout>
      <Sider width="250px">
        <SideBar />
      </Sider>
      <Content>
        <div>{params ? <Widgets params={params}/> : null}</div>
        <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" src={url} />
      </Content>
    </Layout>
  </Layout>
}