import { v1 as uuidv1 } from 'uuid'

//backend
import { getUserInfosById } from 'backend/utils/userService'

//common
import { Skills } from 'common/enum'
import {
  BackCommentExtended,
  UserComments,
  Review,
  ReviewCommentsFile,
  UserState,
  OtherUser,
} from 'common/types'

export const transformReceivedCommentToParsedComments = async (
  user: UserState,
  review: Review,
): Promise<Array<UserComments>> => {
  const userCommentsList: Array<UserComments> = []

  const findFileNameIndex = (
    comments: Array<ReviewCommentsFile>,
    fileName: string,
  ): number => {
    for (let i = 0; i !== comments.length; i += 1) {
      if (comments[i].fileName === fileName) {
        return i
      }
    }
    return -1
  }

  const findUserIdIndex = (userId: string): number => {
    for (let i = 0; i !== userCommentsList.length; i += 1) {
      if (userCommentsList[i].owner._id === userId) {
        return i
      }
    }
    return -1
  }

  for (let i = 0; i !== review.comments.length; i += 1) {
    const indexUserId = findUserIdIndex(review.comments[i].ownerId)
    if (indexUserId === -1) {
      const ownerInfo: OtherUser | undefined = await getUserInfosById(
        user,
        review.comments[i].ownerId,
      )
      if (ownerInfo !== undefined) {
        const newUserComments: UserComments = {
          reviewId: review._id,
          owner: ownerInfo,
          comments: [
            {
              fileName: review.comments[i].fileName,
              language: review.comments[i].language as Skills,
              _id: uuidv1(),
              feedback: [
                {
                  line: parseInt(review.comments[i].line),
                  lineContent: review.comments[i].lineContent,
                  lineSuggestion: review.comments[i].lineSuggestion,
                  comment: review.comments[i].comment,
                  _id: uuidv1(),
                },
              ],
            },
          ],
        }
        userCommentsList.push(newUserComments)
      }
    } else {
      const indexFileName = findFileNameIndex(
        userCommentsList[indexUserId].comments,
        review.comments[i].fileName,
      )
      if (indexFileName === -1) {
        userCommentsList[indexUserId].comments.push({
          fileName: review.comments[i].fileName,
          language: review.comments[i].language as Skills,
          _id: uuidv1(),
          feedback: [
            {
              line: parseInt(review.comments[i].line),
              lineContent: review.comments[i].lineContent,
              lineSuggestion: review.comments[i].lineSuggestion,
              comment: review.comments[i].comment,
              _id: uuidv1(),
            },
          ],
        })
      } else {
        userCommentsList[indexUserId].comments[indexFileName].feedback.push({
          line: parseInt(review.comments[i].line),
          lineContent: review.comments[i].lineContent,
          lineSuggestion: review.comments[i].lineSuggestion,
          comment: review.comments[i].comment,
          _id: uuidv1(),
        })
      }
    }
  }
  return userCommentsList
}
