import styled from 'styled-components';

export const PerksContainerWrapper = styled.div`
  background-color: #f9f8f5;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #fff;
  width: 100%;
`;

export const PerksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface PerksTitleProps {
  backgroundImg: string;
}

export const PerksCard = styled.h1<PerksTitleProps>`
  padding: 20px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;

  h3 {
    font-size: 48px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    color: #212121bf;
    text-align: center;
    padding: 0 20px;
  }
`;
