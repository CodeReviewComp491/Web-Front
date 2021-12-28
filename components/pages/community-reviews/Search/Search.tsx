import React, { useState } from 'react'
import { Form } from 'antd'

//css
import * as Styled from 'components/pages/community-reviews/Search/styles'

interface Props {
  onSubmit: (searchKey: string) => void
}

const Search = ({ onSubmit }: Props): JSX.Element => {
  const [form] = Form.useForm()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    form.setFieldsValue({ searchKey: value })
  }

  const handleOnSubmit = (values: any) => {
    console.log(values)
    onSubmit(values.searchKey)
  }

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      console.log(form.getFieldsValue())
      form.submit()
    }
  }

  return (
    <Styled.Search>
      <Styled.SearchBar
        onKeyUp={handleEnter}
        autoComplete="off"
        form={form}
        onFinish={handleOnSubmit}
      >
        <Form.Item name={'searchKey'}>
          <Styled.SearchInput
            onChange={handleOnChange}
            placeholder={'Search a review'}
          />
        </Form.Item>
        <Styled.SearchSubmit htmlType={'submit'}>
          <Styled.SearchSubmitIcon />
        </Styled.SearchSubmit>
      </Styled.SearchBar>
    </Styled.Search>
  )
}

export default Search
