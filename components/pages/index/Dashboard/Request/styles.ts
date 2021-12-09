import { url } from 'inspector';
import styled from 'styled-components'

export const Request = styled.div`
  width: 500px;
  height: 300px;
  background-color: #282a36;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const RequestHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #44475a;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.div`
  font-size: 18px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
`;

export const ProjectName = styled.span`
  color: #5d8497;
  cursor: pointer;

  &:hover {
    color: #6c98ad
  }
`;

export const Stars = styled.div`
  font-size: 18px;
  color: white;
`;

export const Description = styled.div`
  color: white;
  width: 100%;
  height: 150px;
  overflow-y: auto;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: justify;
  font-size: 18px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatars = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
`;

interface AvatarProps {
  backgroundImage: string;
}

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${(props: AvatarProps) => props.backgroundImage});
  border-radius: 45px;
  background-position: center;
  background-size: contain;
  margin-right: 5px;
`;

export const Contributors = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: white;
`;