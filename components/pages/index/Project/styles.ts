import styled from "styled-components";

export const Project = styled.div`
  width: 615px;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: #5d5b6c;
  overflow: auto;
`;

export const HeaderTitle = styled.div`
  display: inline-flex;
  align-items: center;
  width: 500px;
  height: 50px;
  font-size: 17px;
  color: white;
`;

export const HeaderTitleContent = styled.div`
  width: 500px;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderStars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 115px;
  height: 50px;
  overflow: auto;
  padding-right: 15px;
`;

export const HeaderStarsNumber = styled.span`
  margin-right: 5px;
  color: white;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background-color: #2A272D;
`;

export const Description = styled.div`
  display: inline-flex;
  align-items: center;
  width: 445px;
  height: 100px;
`;

export const DescriptionContent = styled.div`
  width: 445px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Collaborators = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 100px;
  padding-right: 10px;
`;

interface CollaboratorProps {
  imgUrl: string;
}

export const Collaborator = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${(props: CollaboratorProps) => props.imgUrl});
  background-position: center;
  background-size: contain;
  border-radius: 45px;
`;

export const OtherCollaborator = styled.span`
  display: inline-flex;
  align-items: center;
  color: white;
  font-size: 28px;
`;
