import styled from 'styled-components';

type ItemMenuContainerProps = {
  isActive: boolean;
};

export const ItemMenuContainer = styled.div<ItemMenuContainerProps>`
  display: flex;
  align-items: center;
  gap: 3px;

  border-radius: 10px;
  background: ${(props) =>
    props.isActive
      ? 'linear-gradient(90deg, #f7f7f7 50%, #fff 100%)'
      : 'transparent'};
  width: 100%;
  height: 50px;
  padding-left: 10px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #42d0ff24 50%, #ffffff64 100%);
    transition: all 2s ease-in-out;
  }

  span {
    font-size: 14px;
    font-weight: ${(props) => (props.isActive ? '600' : '500')};
    color: ${(props) => (props.isActive ? '#101010CC' : '#757575')};
    margin-left: 10px;
  }

  div {
    background-color: ${(props) =>
      props.isActive ? '#42CFFF' : 'transparent'};
  }

  svg {
    color: ${(props) => (props.isActive ? '#fff !important' : '#757575')};
  }
`;

export const IconContainer = styled.div`
  width: 35px;
  height: 35px;
  border: 0.5px solid #f2f2f2;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
