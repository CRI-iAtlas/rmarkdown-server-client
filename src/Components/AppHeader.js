import React from 'react';
import './AppHeader.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const menuItemStyle = {
  background: "#ab3e31"
}

export const AppHeader = () => <Header className="app-header" style={{ backgroundColor: "#222" }}>
  <div className="logo">RMarkdown Server Demo</div>
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['2']}
    style={{ lineHeight: '64px', backgroundColor: "#222" }}
  >
    {/* <Menu.Item key="1"><Icon type="bar-chart" />Export</Menu.Item>
    <Menu.Item key="2"><Icon type="tool" />Tools</Menu.Item>
    <Menu.Item key="3"><Icon type="info-circle" />About</Menu.Item>
    <Menu.Item key="4"><Icon type="file-text" />Documentation</Menu.Item>
    <Menu.Item key="5"><Icon type="link   V" />Resources</Menu.Item> */}
  </Menu>
</Header>