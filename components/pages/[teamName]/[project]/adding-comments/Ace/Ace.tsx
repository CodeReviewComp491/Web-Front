import React from 'react'
import dynamic from "next/dynamic";
import AceEditor from 'react-ace'
import {} from 'ace-builds/src-noconflict/ext-modelist'
import 'ace-builds/src-noconflict/theme-twilight'

const Ace = (): JSX.Element => {
  return (
    <AceEditor
      mode={'tsx'}
      theme="twilight"
      //onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  )
}

export default Ace;