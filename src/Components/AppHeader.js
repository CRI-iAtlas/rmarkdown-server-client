import React from 'react';
import './AppHeader.css'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export const AppHeader = () => <Header className="app-header" style={{ backgroundColor: "#222" }}>
  <div className="logo">RMarkdown Server Demo</div>
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{ lineHeight: '64px', backgroundColor: "#222" }}
  >
  </Menu>
</Header>