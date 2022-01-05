import { v1 as uuidv1 } from 'uuid'
//common
import { ReviewCommentsFile } from 'common/types'

//config
import { getInitialValues as getInitialValuesComment } from 'config/reviewCommentFile'

export const getInitialValues = (): ReviewCommentsFile => {
  return {
    fileName: '',
    language: null,
    feedback: [getInitialValuesComment()],
    _id: uuidv1(),
  }
}
