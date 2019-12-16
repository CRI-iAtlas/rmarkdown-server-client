import React from 'react';
import { Checkbox, Radio, DatePicker, Switch, Slider, Select } from 'antd';

const {Option} = Select

const styles = {
  radio: {
    display: 'block',
      height: '30px',
      lineHeight: '30px',
      color: '#9D9D9D',
      marginLeft: 0,
  }
}

function Widgets(){
  return (
    <div className="header">
      <div>
        <Checkbox.Group>
          <Checkbox style={styles.radio}>Option 1</Checkbox>
          <Checkbox style={styles.radio}>Option 2</Checkbox>
          <Checkbox style={styles.radio}>Option 3</Checkbox>
        </Checkbox.Group>
      </div>
      <br/>
      <div>
        <Radio.Group>
          <Radio style={styles.radio}>Radio 1</Radio>
          <Radio style={styles.radio}>Radio 2</Radio>
          <Radio style={styles.radio}>Radio 3</Radio>
        </Radio.Group>
      </div>
      <div>
      <DatePicker />
      <Switch/>
      <Slider defaultValue={30}/>
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
  )
}

export default Widgets
