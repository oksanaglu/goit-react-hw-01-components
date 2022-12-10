import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 300px;
  height: 80px;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  margin-left: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 15px;
  width: 60px;
  border-radius: 5px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;
