import React from 'react'
import { Menu, Icon } from 'antd'
import pages from '../pages.json'
import { array } from 'art-comprehensions'
import './SideBar.css';
import { usePage, setPage } from '../Redux/Page'

const { SubMenu } = Menu;

const renderMenu = (list) =>
  array(
    list,
    ({ url, icon, name, items }) => {
      const presentation = <span>{icon ? <Icon type={icon} /> : null}{name}</span>
      if (url) {
        return <Menu.Item key={url} onClick={() => setPage(url)}>{presentation}</Menu.Item>
      } else {
        return <SubMenu
          key="sub1"
          title={presentation}
        >
          {renderMenu(items)}
        </SubMenu>
      }
    }
  )

const log = (a) => {
  console.log(a)
  return a
}

export const SideBar = ({ showPage }) =>
  <div className="sidebar">
    <Menu
      mode="inline"
      selectedKeys={log([usePage()])}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      {renderMenu(pages)}
    </Menu>
  </div>
