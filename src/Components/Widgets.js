import React from 'react';
import { Select } from 'antd';

const { Option } = Select

export const Widgets = () =>
  <div className="widgets">
    <div>

      <Select defaultValue="sex" style={{ width: 120 }}>
        <Option value="sex">sex</Option>
        <Option value="ph.karno">ph.karno</Option>
        <Option value="pat.karno">pat.karno</Option>
      </Select>
    </div>
  </div>
