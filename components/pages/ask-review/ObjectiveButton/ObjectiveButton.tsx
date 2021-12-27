import React from 'react'

//css
import * as Styled from 'components/pages/ask-review/ObjectiveButton/styles'

interface Props {
  isSelected: boolean;
  children?: React.ReactNode
  onClick?: () => void;
}

const ObjectiveButton = ({
  isSelected,
  children,
  onClick,
}: Props): JSX.Element => {
  return (
    <Styled.MyCheckBox onClick={() => onClick ? onClick() : null} isSelected={isSelected}>
      {children}
    </Styled.MyCheckBox>
  )
}

export default ObjectiveButton
