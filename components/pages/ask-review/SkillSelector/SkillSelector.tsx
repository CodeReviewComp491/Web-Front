import React from 'react'

//config
import { SkillProps, SkillsProps } from 'config/skills'

//common
import { Skills } from 'common/enum'

//css
import * as Styled from 'components/pages/ask-review/SkillSelector/styles'

interface Props {
  onChange: (skillName: Skills) => void;
}

const SkillSelector = ({onChange}: Props): JSX.Element => {
  const displaySkills = (): JSX.Element => {
    return (
      <>
        {SkillsProps.map((value, index) => {
          return (
            <Styled.Option key={index} value={value.name}>
              <Styled.OptionContent>
                <Styled.OptionIcon bckImage={value.iconUrl}/>
                <Styled.OptionTitle>{value.name}</Styled.OptionTitle>
              </Styled.OptionContent>
            </Styled.Option>
          )
        })}
      </>
    )
  }

  return (
    <Styled.SkillSelect
      placeholder="Select a option and change input text above"
      allowClear
      onChange={(value: any) => onChange(value)}
    >
      {displaySkills()}
    </Styled.SkillSelect>
  )
}

export default SkillSelector
