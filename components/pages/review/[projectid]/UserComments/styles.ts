import styled from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { NoneColorButton } from 'styles/globals';

export const UserComments = styled.div`
  width: 1460px;
  margin-top: 100px;
`;

export const UserCommentsContentCenter = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

export const Files = styled.div`
  background-color: #5E5E5E;
  width: 330px;
  border-right: solid black 1px;
  border-bottom: solid black 1px;
  overflow: auto;
`;

export const FilesHeader = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: solid black 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`;

export const FilesHeaderIcon = styled.div`
  background-image: url('/global/folder.png');
  background-position: center;
  background-size: contain;
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

export const FilesHeaderTitle = styled.span`
  font-size: 24px;
  color: white;
  margin-left: 5px;
`;

interface FileProps {
  isSelected: boolean;
}

export const File = styled(NoneColorButton)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: white;
  background-color: ${(props: FileProps) => props.isSelected ? '#454545' : 'transparent'};
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const FileTitle = styled.span`
  
`;

export const FileSelectorIcon = styled(RightOutlined)`
  font-size: 18px;
  color: white;
`;

export const Comments = styled.div`
  background-color: #5E5E5E;
  width: 1129px;
  min-height: 380px;
  border-bottom: solid black 1px;
  overflow: auto;
`;

export const CommentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid black 1px;
  width: 100%;
  height: 40px;
  overflow: auto;
`;

export const CommentsHeaderAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface CommentsHeaderAuthorIconProps {
  bckImage: string;
}

export const CommentsHeaderAuthorIcon = styled.div`
  background-image: ${(props: CommentsHeaderAuthorIconProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-left: 5px;
`;

export const CommentsHeaderAuthorTitle = styled.span`
  font-size: 18px;
  color: white;
  margin-left: 5px;
`;

export const CommentsHeaderOthers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
`;

export const CommentsHeaderOthersCommentSelector = styled.div`
  font-size: 18px;
  color: white;
`;

export const CommentsHeaderOthersCommentSelectorButton = styled(NoneColorButton)`
  &:hover {
    cursor: pointer;
  }
`;

export const CommentsHeaderOthersCommentSelectorLeft = styled(LeftOutlined)`
  font-size: 18px;
  color: white;
`;

export const CommentsHeaderOthersCommentSelectorRight = styled(RightOutlined)`
  font-size: 18px;
  color: white;
`;

export const CommentsHeaderOthersDate = styled.span`
  font-size: 18px;
  color: white;
  margin-left: 40px;
`;

export const CommentsAceContent = styled.div`
  border-bottom: solid white 1px;
`;

export const CommentsAceWrapper = styled.div`
  & > div {
    width: 1129px !important;
    height: 170px !important;
    background-color: #464545 !important;
  }

  & > div > div:nth-of-type(1) {
    background-color: transparent !important;
    border-right: solid black 1px !important;
  }
`;

export const Comment = styled.div`
  width: 1460px;
  padding: 10px;
  padding-bottom: 30px;
  padding-left: 20px;
  color: white;
  font-size: 18px;
  background-color: #5E5E5E;
`;