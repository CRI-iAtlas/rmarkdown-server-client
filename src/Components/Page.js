import React, { useState } from 'react';
import { Layout, Select, Form } from 'antd'
import { array, object } from 'art-comprehensions'

const Url = require('url-parse')
const { Content } = Layout
const { Option } = Select

export const Page = ({ page: { params, url } }) => {
  const [values, setValues] = useState(object(params, ({ value }) => value))
  const parsedUrl = new Url(url, null, true)
  parsedUrl.set("query", { ...parsedUrl.query, ...values })

  const formItemLayout = {
    labelCol: {
      xs: { span: 8 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  return <Content>
    <Form {...formItemLayout}>{array(params, ({ label, value, input, choices }, key) => {
      if (input == "select") {
        return <Form.Item label={label}><Select
          onChange={(v) => setValues(object(params, ({ value }, k) => k === key ? v : value))}
          key={key}
          defaultValue={values[key]}
          style={{ width: "120px" }}
        >
          {array(choices, (choice) =>
            <Option key={`${key}-${choice}`} value={choice}>{choice}</Option>
          )}
        </Select></Form.Item>
      }
    })}</Form>
    {url
      ? <iframe id="page-loader" title="webpage" name="page-loader" className="iframe" src={parsedUrl.toString()} />
      : null
    }
  </Content>
}

