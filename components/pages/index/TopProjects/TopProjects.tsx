import React from 'react';

//components
import Project from 'components/pages/index/Project/Project';

//css
import * as Styled from 'components/pages/index/TopProjects/styles';

const TopProjects = (): JSX.Element => {
  return (
    <Styled.TopProjects>
      <Styled.TopProjectsCenter>
        <Project
        projectTitle={'voxel-tech'}
        teamTitle={'unityIronPython'}
        numberOfStars={1}
        description={'IronPython integration in Unity'}
        firstCollabPicture={'/fakeusers/15.jpg'}
        secondCollabPicture={'/fakeusers/36.jpg'}
        otherCollabNumber={36}
        />
        <Project
        projectTitle={'cat-race'}
        teamTitle={'funchair'}
        numberOfStars={24}
        description={"Race in the city. Don't get caught by the pound!"}
        firstCollabPicture={'/fakeusers/8.jpg'}
        secondCollabPicture={'/fakeusers/74.jpg'}
        otherCollabNumber={4}
        />
      </Styled.TopProjectsCenter>
    </Styled.TopProjects>
  )
}

export default TopProjects;