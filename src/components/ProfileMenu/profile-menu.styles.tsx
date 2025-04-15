import styled from 'styled-components';

export const ProfileMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }

  span {
    color: #757575;
    font-size: 14px;
    font-weight: 500;
  }
`;
