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

function Pages(){
  return (
    <Menu mode="inline" style={styles.menu}>
      {pages.map(page => {
        return (
        <Menu.Item key={page.name} onClick={()=>changeSrc(page.file)} style={styles.menuItem}>
          <Icon type="file" />
          <span>{page.name}</span>
        </Menu.Item>)
      })}
    </Menu>
  )
}

function changeSrc(file){
  const url = `http://localhost:3000/${file}`
  const iframe = document.getElementById('page-loader')
    iframe.src = url
}

export default Pages