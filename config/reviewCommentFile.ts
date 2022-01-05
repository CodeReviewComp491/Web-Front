import { ReviewCommentFile } from 'common/types'
import _ from 'lodash'
import { v1 as uuidv1 } from 'uuid'

export const getInitialValues = (): ReviewCommentFile => {
  return {
    line: 1,
    lineContent: '',
    lineSuggestion: '',
    comment: '',
    _id: uuidv1(),
  }
}
