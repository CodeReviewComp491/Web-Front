import React, { useState } from 'react'

//components
import ObjectiveButton from 'components/pages/ask-review/ObjectiveButton/ObjectiveButton'

export interface Objectives {
  security: boolean,
  bestPractice: boolean,
  optimization: boolean,
}

interface Props {
  onChange: (state: Objectives) => void;
}

const ObjectiveButtons = ({onChange}: Props): JSX.Element => {
  const [state, setState] = useState<Objectives>({
    security: false,
    bestPractice: false,
    optimization: false,
  })

  const handleOnClick = (state: Objectives): void => {
    onChange(state);
    setState(state);
  }

  return (
    <>
      <ObjectiveButton isSelected={state.security} onClick={() => handleOnClick({...state, security: !state.security})}>
        Security
      </ObjectiveButton>
      <ObjectiveButton isSelected={state.bestPractice} onClick={() => handleOnClick({...state, bestPractice: !state.bestPractice})}>
        Best Practice
      </ObjectiveButton>
      <ObjectiveButton isSelected={state.optimization} onClick={() => handleOnClick({...state, optimization: !state.optimization})}>
        Optimization
      </ObjectiveButton>
    </>
  )
}

export default ObjectiveButtons;
