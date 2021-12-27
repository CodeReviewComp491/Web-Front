import React, { useState } from 'react'

//components
import SkillSelector from 'components/pages/ask-review/SkillSelector/SkillSelector'

//common
import { Skills } from 'common/enum'

export declare type SkillsSelection = Array<{
  name: Skills | undefined
}>

interface Props {
  onChange: (skillsSelection: Array<Skills>) => void
}

const SkillsSelectors = ({ onChange }: Props): JSX.Element => {
  const [skillsSelection, setSkillsSelection] = useState<SkillsSelection>([
    {
      name: undefined,
    },
    {
      name: undefined,
    },
    {
      name: undefined,
    },
  ])
  const [skillSelectionRawList, setSkillSelectionRawList] = useState<
    Array<Skills>
  >([])

  const createArrowList = (newSkillsSelection: SkillsSelection): void => {
    const newSkillSelectionRawList: Array<Skills> = []
    for (let i = 0; i !== newSkillsSelection.length; i += 1) {
      const name = newSkillsSelection[i].name
      if (name !== undefined) {
        newSkillSelectionRawList.push(name)
      }
    }
    console.log(newSkillSelectionRawList)
    onChange(newSkillSelectionRawList);
    setSkillSelectionRawList(newSkillSelectionRawList)
    setSkillsSelection(newSkillsSelection)
  }

  const handleOnChange = (skillName: Skills, index: number) => {
    const newSkillsSelection = [...skillsSelection]
    newSkillsSelection[index].name = skillName
    if (index + 1 === skillsSelection.length) {
      const newSkillsSelectionMore = [
        ...newSkillsSelection,
        { name: undefined },
      ]
      createArrowList(newSkillsSelectionMore)
      return
    }
    createArrowList(newSkillsSelection)
  }

  const displaySelector = (): JSX.Element => {
    return (
      <>
        {skillsSelection.map((selector, index) => {
          return (
            <SkillSelector
              onChange={(skillName: Skills) => handleOnChange(skillName, index)}
              key={index}
            />
          )
        })}
      </>
    )
  }

  return <>{displaySelector()}</>
}

export default SkillsSelectors
