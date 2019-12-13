import React, { Component } from 'react';
import { Menu, Icon, Checkbox, Radio, DatePicker, Switch, Slider, Select } from 'antd';
import './App.css';

const { Option } = Select

const pages = [
  { name: "Page 1", file: "?region=page1" },
  { name: "Page 2", file: "?region=page2" },
  { name: "Page 3", file: "?region=page3" }
]

class App extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <div className="header">
          <div>
            <Checkbox.Group>
              <Checkbox style={radioStyle}>Option 1</Checkbox>
              <Checkbox style={radioStyle}>Option 2</Checkbox>
              <Checkbox style={radioStyle}>Option 3</Checkbox>
            </Checkbox.Group>
          </div>
          <br />
          <div>
            <Radio.Group>
              <Radio style={radioStyle}>Radio 1</Radio>
              <Radio style={radioStyle}>Radio 2</Radio>
              <Radio style={radioStyle}>Radio 3</Radio>
            </Radio.Group>
          </div>
          <div>
            <DatePicker />
            <Switch />
            <Slider defaultValue={30} />
          </div>
          <div>
            <Select defaultValue="1" style={{ width: 120 }}>
              <Option value="1">Value 1</Option>
              <Option value="2">Value 2</Option>
              <Option value="3">Value 3</Option>
              <Option value="4">Value 4</Option>
            </Select>
          </div>
        </div>
        <div className="container">
          <div className="sidebar">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              {pages.map(page => {
                return (
                  <Menu.Item key={page.name} onClick={() => changeSrc(page.file)}>
                    <Icon type="file" />
                    <span>{page.name}</span>
                  </Menu.Item>)
              })}
            </Menu>
          </div>
          <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" />
        </div>
      </div>
    );
  }
}

function changeSrc(file) {
  const url = `http://localhost:5001${file}`
  const iframe = document.getElementById('page-loader')
  iframe.src = url
}

// function fetchPage(url){
//   fetch(`http://localhost:3000${url}`)
//   .then(res => res.text())
//   .then(data => {
//     console.log(data)
//     const iframe = document.getElementById('page-loader')
//     iframe.srcdoc = data
//   })
//   .catch(e => {
//     console.log(e)
//   })
// }

export default App;
