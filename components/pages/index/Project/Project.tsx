import React from "react";
import Image from "next/image";

//antd
import { Tooltip } from "antd";

//css
import * as Styled from "components/pages/index/Project/styles";

interface Props {
  projectTitle: string;
  teamTitle: string;
  numberOfStars: number;
  description: string;
  firstCollabPicture: string;
  secondCollabPicture: string;
  otherCollabNumber: number;
}

const Project = ({
  projectTitle,
  teamTitle,
  numberOfStars,
  description,
  firstCollabPicture,
  secondCollabPicture,
  otherCollabNumber,
}: Props): JSX.Element => {
  return (
    <Styled.Project>
      <Styled.Header>
        <Tooltip title={`${projectTitle} / ${teamTitle}`}>
          <Styled.HeaderTitle>
            <Styled.HeaderTitleContent>
              {projectTitle} / {teamTitle}
            </Styled.HeaderTitleContent>
          </Styled.HeaderTitle>
        </Tooltip>
        <Styled.HeaderStars>
          <Image src={"/star.png"} width={30} height={30} alt={"star"} />
          <Styled.HeaderStarsNumber>{numberOfStars}</Styled.HeaderStarsNumber>
        </Styled.HeaderStars>
      </Styled.Header>
      <Styled.Body>
        <Styled.Description>
          <Tooltip placement={"top"} title={description}>
            <Styled.DescriptionContent>{description}</Styled.DescriptionContent>
          </Tooltip>
        </Styled.Description>
        <Styled.Collaborators>
          <Styled.Collaborator imgUrl={firstCollabPicture}/>
          <Styled.Collaborator imgUrl={secondCollabPicture}/>
          <Styled.OtherCollaborator>+{otherCollabNumber}</Styled.OtherCollaborator>
        </Styled.Collaborators>
      </Styled.Body>
    </Styled.Project>
  );
};

export default Project;
