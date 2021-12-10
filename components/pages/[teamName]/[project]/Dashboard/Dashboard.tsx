import React from 'react';
import {Tag} from 'antd';

//css
import * as Styled from 'components/pages/[teamName]/[project]/Dashboard/styles';

//common
import { LastRequest } from 'common/types';

interface Props {
  project: LastRequest;
}

const Dashboard = ({project}: Props): JSX.Element => {

  return (
    <Styled.Dashboard>
      <Styled.Header>
        <Styled.ProjectHeader>
          <Styled.ProjectName>
            {project.name}
          </Styled.ProjectName>
          <Tag color="#87d068">{project.status}</Tag>
        </Styled.ProjectHeader>
        <Styled.ProjectTeamHeader>
          <Styled.ProjectTeamName>
            {project.teamName}
          </Styled.ProjectTeamName>
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
            <Styled.MyButton backgroundColor={'blue'} color={'white'}>
              Go to source code
            </Styled.MyButton>
          </Styled.Action>
          <Styled.Action>
            <Styled.ActionTitle>Claim</Styled.ActionTitle>
            <Styled.ActionDescription>
              Indicate to the owner that you will take time to handle the request and provide a review
            </Styled.ActionDescription>
            <Styled.MyButton backgroundColor={'#d9a107'} color={'white'}>
              Claim this request
            </Styled.MyButton>
          </Styled.Action>
        </Styled.ActionsCenter>
      </Styled.Actions>
    </Styled.Dashboard>
  )
}

export default Dashboard;