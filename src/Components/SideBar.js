import React from 'react'
import { Menu, Icon } from 'antd'
import pages from '../pages.json'
import { array } from 'art-comprehensions'
import './SideBar.css';
import { usePage, setPage } from '../Redux/Page'

const { SubMenu } = Menu;

const pageToKey = ({name, url}) => `${name}-${url}`

const renderMenu = (list) =>
  array(
    list,
    (page) => {
      const { url, icon, name, items } = page
      const presentation = <span>{icon ? <Icon type={icon} /> : null}{name}</span>
      if (url) {
        return <Menu.Item key={pageToKey(page)} onClick={() => setPage(page)}>{presentation}</Menu.Item>
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
      selectedKeys={[pageToKey(usePage())]}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      {renderMenu(pages)}
    </Menu>
  </div>
