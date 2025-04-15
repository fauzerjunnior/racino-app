import styled from 'styled-components';

export const SidebarContainerWrapper = styled.div`
  background-color: #f9f8f5;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #fff;
  height: min-content;
`;

export const SidebarContainer = styled.div`
  background-color: #fff;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 14px;
  min-height: 80vh;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const ItemMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 15px;
`;
