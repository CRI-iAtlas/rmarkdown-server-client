import React, { useState } from 'react';
import { Layout, Select } from 'antd'
import { array, object } from 'art-comprehensions'

const Url = require('url-parse')
const { Content } = Layout
const { Option } = Select

export const Page = ({ page: { params, url } }) => {
  const [values, setValues] = useState(object(params, ({ value }) => value))
  const parsedUrl = new Url(url, null, true)
  parsedUrl.set("query", { ...parsedUrl.query, ...values })

  return <Content>
    <div>{array(params, ({ label, value, input, choices }, key) => {
      if (input == "select") {
        return <Select
          onChange={(v) => setValues(object(params, ({ value }, k) => k === key ? v : value))}
          key={key}
          defaultValue={values[key]}
          style={{ width: "120px" }}
        >
          {array(choices, (choice) =>
            <Option key={`${key}-${choice}`} value={choice}>{choice}</Option>
          )}
        </Select>
      }
    })}</div>
    {url
      ? <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" src={parsedUrl.toString()} />
      : null
    }
  </Content>
}

