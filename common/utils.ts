import { v1 as uuidv1 } from 'uuid'

//config
import { SkillsProps, SkillProps } from 'config/skills'

//common
import { Skills } from 'common/enum'
import {
  BackCommentExtended,
  UserComments,
  Review,
  ReviewCommentsFile,
} from './types'

export const findSkillProps = (skillName: Skills): SkillProps | undefined => {
  for (let i = 0; i !== SkillsProps.length; i += 1) {
    if (SkillsProps[i].name === skillName) return SkillsProps[i]
  }
  return undefined
}

export const SkillToAceLanguageTranslator = (
  skill: Skills,
): string | undefined => {
  switch (skill) {
    case Skills.C:
      return 'c_cpp'
    case Skills.CPP:
      return 'c_cpp'
    case Skills.CSHARP:
      return 'csharp'
    case Skills.CSS:
      return 'css'
    case Skills.GO:
      return 'golang'
    case Skills.HTML:
      return 'html'
    case Skills.JAVASCRIPT:
      return 'javascript'
    case Skills.PYTHON:
      return 'python'
    case Skills.REACT:
      return 'tsx'
    case Skills.RUST:
      return 'rust'
    default:
      return undefined
  }
}

export const transformReceivedCommentToParsedComments = (
  review: Review,
): Array<UserComments> => {
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
      if (userCommentsList[i].userId === userId) {
        return i
      }
    }
    return -1
  }

  for (let i = 0; i !== review.comments.length; i += 1) {
    const indexUserId = findUserIdIndex(review.comments[i].ownerId)
    if (indexUserId === -1) {
      const newUserComments: UserComments = {
        reviewId: review._id,
        userId: review.comments[i].ownerId,
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
      userCommentsList.push(newUserComments);
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
  return userCommentsList;
}
