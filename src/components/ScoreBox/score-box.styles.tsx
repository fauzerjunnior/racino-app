import styled from 'styled-components';

export const ScoreBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 1.8px 0;
  border-radius: 10px;

  background: #d27d08;
  background: linear-gradient(90deg, #d27e0871 1%, #ffcb3c74 85%);

  margin-bottom: 30px;
`;

export const ScoreBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98.5%;

  padding: 10px;
  border-radius: 8px;
  background-color: #fff;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

interface ButtonProps {
  background: string;
}

export const ShopButton = styled.button<ButtonProps>`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 12px;
  background: url(${(props) => props.background});
  background-size: cover;

  color: #8f5300;
  font-weight: 600;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const ShopButtonWrapper = styled.div`
  border-radius: 16px;
  background: #d27d08;
  background: linear-gradient(
    90deg,
    rgba(210, 125, 8, 1) -15%,
    rgba(255, 203, 60, 1) 85%
  );
  width: 104px;
  height: 34px;
  padding: 2px 1.5px;
  margin-top: 12px;
`;

export const PointsValue = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #344054;
  margin-bottom: 5px;
`;

export const PointsDescription = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #344054;
`;
