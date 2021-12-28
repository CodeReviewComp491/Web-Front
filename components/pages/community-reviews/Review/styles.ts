import styled from 'styled-components'

export const Review = styled.div`
  width: 500px;
  height: 300px;
  background-color: #282a36;
`

export const ReviewHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #44475a;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('/global/project-icon.png');
  background-position: center;
  background-size: contain;
  margin-left: 20px;
`

export const Title = styled.div`
  color: #5d8497;
  font-size: 18px;
  margin-left: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

export const OwnerTitle = styled.span`
  color: white;
  
  &:hover {
    cursor: default;
  }
`

export const ReviewBody = styled.div`
  width: 100%;
  height: 160px;
  overflow: auto;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-size: 18px;
`;

export const ReviewFooter = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Contributors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

interface CollaboratorProps {
  bckImage: string;
}

export const Contributor = styled.div`
  background-image: ${(props: CollaboratorProps) => `url('${props.bckImage}')`};
  background-position: center;
  background-size: contain;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  margin-right: 10px;
`;

export const ContributorsNumberTitle = styled.div`
  font-size: 11px;
  color: white;
  margin-right: 20px;
`;