import styled from 'styled-components'
import { Button } from 'antd';

export const Dashboard = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 50px;
`

export const Header = styled.div`
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
`;
