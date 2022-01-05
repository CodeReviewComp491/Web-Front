import React from 'react'
import { Tag } from 'antd'
import Link from 'next/link'
import { useSelector } from 'react-redux'

//store
import { GlobalState } from 'store/interfaces'

//css
import * as Styled from 'components/pages/review/[projectid]/Dashboard/styles'

//common
import { UserState, UserComments, Review, OtherUser } from 'common/types'
import { findSkillProps } from 'common/utils'
import { Skills } from 'common/enum'

//config
import { SkillProps } from 'config/skills'
import paths from 'config/routes'

interface Props {
  review: Review
  userCommentsList: Array<UserComments>
  ownerReviewInfos: OtherUser
}

const Dashboard = ({
  review,
  userCommentsList,
  ownerReviewInfos,
}: Props): JSX.Element => {
  const storeState: GlobalState = useSelector<GlobalState, GlobalState>(
    (state) => state,
  )

  const displayGoals = (): JSX.Element => {
    let objectivesString: string = ''

    for (let i = 0; i !== review.objectives.length; i += 1) {
      if (i !== 0) {
        objectivesString += ', '
      }
      objectivesString += review.objectives[i]
    }
    return (
      <Styled.HeaderProjectConfigGoalsTitle>
        {objectivesString}
      </Styled.HeaderProjectConfigGoalsTitle>
    )
  }

  const getSkillAvatar = (skillName: Skills | null): string => {
    if (skillName === null) return ''

    const skillProps: SkillProps | undefined = findSkillProps(skillName)
    if (skillProps === undefined) return ''
    return skillProps.iconUrl
  }

  const displaySkills = (): JSX.Element => {
    return (
      <>
        {review.skillsNeeded.map((skillNeeded: Skills, index: number) => {
          return (
            <Styled.HeaderProjectConfigSkillsIcon
              key={index}
              bckImage={getSkillAvatar(skillNeeded)}
            />
          )
        })}
      </>
    )
  }

  return (
    <Styled.Dashboard>
      <Styled.Header>
        <Styled.HeaderFirst>
          <Styled.HeaderFirstProjectInfos>
            <Styled.HeaderFirstProjectInfosTitle>
              {review.name}
            </Styled.HeaderFirstProjectInfosTitle>
            <Styled.HeaderFirstProjectInfosStatus color="#87d068">
              {review.status}
            </Styled.HeaderFirstProjectInfosStatus>
          </Styled.HeaderFirstProjectInfos>
          <Styled.HeaderFirstOpenInfos>
            <Styled.HeaderFirstOpenInfosTitle>
              Opened by: {ownerReviewInfos.username}
            </Styled.HeaderFirstOpenInfosTitle>
            <Styled.HeaderFirstOpenInfosAvatar
              bckImage={`https://ui-avatars.com/api/?background=fc032c&color=fff&name=${ownerReviewInfos.username}`}
            />
          </Styled.HeaderFirstOpenInfos>
        </Styled.HeaderFirst>
        <Styled.HeaderSecond>
          <Styled.HeaderSecondLogo />
          <Styled.HeaderSecondDate>{review.createdAt}</Styled.HeaderSecondDate>
        </Styled.HeaderSecond>
        <Styled.HeaderDescription>
          {review.description}
        </Styled.HeaderDescription>
        <Styled.HeaderProjectConfig>
          <Styled.HeaderProjectConfigGoals>
            <Styled.HeaderProjectConfigGoalsIcon />
            {displayGoals()}
          </Styled.HeaderProjectConfigGoals>
          <Styled.HeaderProjectConfigSkills>
            <Styled.HeaderProjectConfigSkillsTitle>
              Skills needed:
            </Styled.HeaderProjectConfigSkillsTitle>
            {displaySkills()}
          </Styled.HeaderProjectConfigSkills>
        </Styled.HeaderProjectConfig>
        <Styled.Actions>
          <Styled.Action>
            <Styled.ActionTitle>Discover</Styled.ActionTitle>
            <Styled.ActionDescription>
              You are able to discover more informations about a directly on the
              project repository
            </Styled.ActionDescription>
            <Link href={review.repoUrl} passHref>
              <a target="_blank" rel="noreferrer">
                <Styled.MyButton bckcolor={'blue'} color={'white'}>
                  Go to source code
                </Styled.MyButton>
              </a>
            </Link>
          </Styled.Action>
          <Styled.Action>
            <Styled.ActionTitle>Claim</Styled.ActionTitle>
            <Styled.ActionDescription>
              Indicate to the owner that you will take time to handle the
              request and provide a review
            </Styled.ActionDescription>
            <Styled.MyButton bckcolor={'#d9a107'} color={'white'}>
              Claim this request
            </Styled.MyButton>
          </Styled.Action>
        </Styled.Actions>
        <Link href={`${paths.home.review.index}/${review._id}/${paths.home.review.$id.addingComments.__query[2]}`}>
          <Styled.AddingComments>Add a comment</Styled.AddingComments>
        </Link>
      </Styled.Header>
    </Styled.Dashboard>
  )

  /*return (
    <Styled.Dashboard>
      <Styled.Header>
        <Styled.ProjectHeader>
          <Styled.ProjectName>{project.name}</Styled.ProjectName>
          <Tag color="#87d068">{project.status}</Tag>
        </Styled.ProjectHeader>
        <Styled.ProjectTeamHeader>
          <Styled.ProjectTeamName>{project.teamName}</Styled.ProjectTeamName>
        </Styled.ProjectTeamHeader>
      </Styled.Header>
      <Styled.Actions>
        <Styled.ActionsCenter>
          <Styled.Action>
            <Styled.ActionTitle>Discover</Styled.ActionTitle>
            <Styled.ActionDescription>
              You are able to discover more informations about {project.name}{' '}
              directly on the project repository
            </Styled.ActionDescription>
            <Styled.MyButton bckColor={'blue'} color={'white'}>
              Go to source code
            </Styled.MyButton>
          </Styled.Action>
          <Styled.Action>
            <Styled.ActionTitle>Claim</Styled.ActionTitle>
            <Styled.ActionDescription>
              Indicate to the owner that you will take time to handle the
              request and provide a review
            </Styled.ActionDescription>
            <Styled.MyButton bckColor={'#d9a107'} color={'white'}>
              Claim this request
            </Styled.MyButton>
          </Styled.Action>
        </Styled.ActionsCenter>
        <Link
          href={`/review/${router.query.projectid}/adding-comments`}
        >
          <Styled.AddingCommentsButton bckColor={'#d40012'} color={'white'}>
            Adding comments
          </Styled.AddingCommentsButton>
        </Link>
      </Styled.Actions>
    </Styled.Dashboard>
  )*/
}

export default Dashboard
