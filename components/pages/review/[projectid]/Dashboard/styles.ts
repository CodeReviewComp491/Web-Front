import styled from 'styled-components'
import { Button, Tag } from 'antd';


export const Dashboard = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 70px;
  padding-left: 15px;
  padding-right: 15px;
`

export const Header = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  overflow: auto;
`;

export const HeaderFirst = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const HeaderFirstProjectInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderFirstProjectInfosTitle = styled.span`
  font-size: 22px;
  margin-right: 15px;
`;

export const HeaderFirstProjectInfosStatus = styled(Tag)`
  width: 75px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0px;
  padding-right: 0px;
`;

export const HeaderFirstOpenInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderFirstOpenInfosTitle = styled.span`
  font-size: 18px;
  color: black;
  margin-right: 15px;
`;

interface HeaderFirstOpenInfosAvatarProps {
  bckImage: string;
}

export const HeaderFirstOpenInfosAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-image: ${(props: HeaderFirstOpenInfosAvatarProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
  border-radius: 40px;
`;

export const HeaderSecond = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const HeaderSecondLogo = styled.div`
  width: 22px;
  height: 22px;
  background-image: url('/global/wall-clock.png');
  background-position: center;
  background-size: contain;
  margin-right: 15px;
`;

export const HeaderSecondDate = styled.span`
  font-size: 14px;
  color: black;
`;

export const HeaderDescription = styled.div`
  font-size: 18px;
  color: black;
  margin-top: 20px;
`;

export const HeaderProjectConfig = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const HeaderProjectConfigGoals = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderProjectConfigGoalsIcon = styled.div`
  width: 33px;
  height: 33px;
  background-image: url('/global/target.png');
  background-position: center;
  background-size: contain;
  margin-right: 10px;
`;

export const HeaderProjectConfigGoalsTitle = styled.span`
  font-size: 18px;
  color: black;
`;

export const HeaderProjectConfigSkills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderProjectConfigSkillsTitle = styled.span`
  font-size: 18px;
  color: black;
  margin-right: 15px;
`;

interface HeaderProjectConfigSkillsIconProps {
  bckImage: string;
}

export const HeaderProjectConfigSkillsIcon = styled.div`
  width: 33px;
  height: 33px;
  background-image: ${(props: HeaderProjectConfigSkillsIconProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const Action = styled.div`
  width: 49%;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  padding-left: 15px;
  padding-right: 5px;
`;

export const ActionTitle = styled.div`
  font-size: 24px;
  color: black;
`;

export const ActionDescription = styled.div`
  font-size: 14px;
  color: black;
`;

interface MyButtonProps {
  bckcolor: string;
  color: string;
}

export const MyButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: ${(props: MyButtonProps) => props.bckcolor};
  border: none;
  color: ${(props: MyButtonProps) => props.color};
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    background-color: ${(props: MyButtonProps) => props.bckcolor};
    color: ${(props: MyButtonProps) => props.color};

  }
`;

export const AddingComments = styled(Button)`
  width: 620px;
  height: 55px;
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #818EA5;
  margin-top: 40px;
  margin-bottom: 30px;

  &:hover, &:focus {
    background-color: #818EA5;
    color: white;

  }
`;

/*export const Header = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ProjectName = styled.span`
  font-size: 20px;
  color: black;
  margin-right: 10px;
`

export const ProjectTeamHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ProjectTeamName = styled.span`
  font-size: 13px;
  color: black;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ActionsCenter = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled.div`
  width: 49%;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  padding-left: 15px;
  padding-right: 5px;
`;

export const ActionTitle = styled.div`
  font-size: 20px;
  color: black;
`;

export const ActionDescription = styled.div`
  font-size: 15px;
  color: black;
`;

interface MyButtonProps {
  bckColor: string;
  color: string;
}

export const MyButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props: MyButtonProps) => props.bckColor};
  border: none;
  color: ${(props: MyButtonProps) => props.color};
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    background-color: ${(props: MyButtonProps) => props.bckColor};
    color: ${(props: MyButtonProps) => props.color};

  }
`;

export const AddingCommentsButton = styled(Button)`
  margin-top: 30px;
  padding: 20px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: ${(props: MyButtonProps) => props.bckColor};
  border: none;
  color: ${(props: MyButtonProps) => props.color};
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover, &:focus {
    background-color: ${(props: MyButtonProps) => props.bckColor};
    color: ${(props: MyButtonProps) => props.color};

  }
`;*/
