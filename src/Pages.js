import React from 'react'
import { Menu, Icon } from 'antd'
import pages from './pages.json'

const styles = {
  menu: {
    background: '#343434',
  },
  menuItem: {
    background: '#575E5F',
    color: '#DADADA'
  }
}

function Pages({setSrc}){
  return (
    <Menu mode="inline" style={styles.menu}>
      {pages.map(page => {
        return (
        <Menu.Item key={page.name} onClick={()=>setSrc(page.file)} style={styles.menuItem}>
          <Icon type="file" />
          <span>{page.name}</span>
        </Menu.Item>)
      })}
    </Menu>
  )
}

export default Pages