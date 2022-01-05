import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-golang'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-tsx'
import 'ace-builds/src-noconflict/mode-rust'

//common
import { Skills } from 'common/enum'
import { SkillToAceLanguageTranslator } from 'common/utils'


interface Props {
  language: Skills | null;
  onChange: (value: string) => void;
  firstLineNumber: number;
  value?: string
}

const Ace = ({language, onChange, firstLineNumber, value}: Props): JSX.Element => {
  return (
    <AceEditor
      mode={
        language === null ? undefined : SkillToAceLanguageTranslator(language)
      }
      fontSize={18}
      setOptions={{ firstLineNumber: firstLineNumber }}
      onChange={onChange}
      value={value}
    />
  )
}

export default Ace
