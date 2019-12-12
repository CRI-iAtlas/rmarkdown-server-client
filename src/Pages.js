import React from 'react'
import { Menu, Icon } from 'antd'
import pages from './pages.json'

function Pages(){
  return (
    <Menu mode="inline" theme="dark">
      {pages.map(page => {
        return (
        <Menu.Item key={page.name} onClick={()=>changeSrc(page.file)}>
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