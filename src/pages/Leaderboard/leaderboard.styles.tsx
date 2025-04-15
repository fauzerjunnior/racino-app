import styled from 'styled-components';

export const LeaderboardContainerWrapper = styled.div`
  background-color: #f9f8f5;
  padding: 10px;
  border-radius: 14px;
  border: 1px solid #fff;
  width: 100%;
`;

export const LeaderboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface LeaderboardTitleProps {
  backgroundImg: string;
}

export const LeaderboardCard = styled.h1<LeaderboardTitleProps>`
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

type PlayerScoreCardWrapperProps = {
  highlight?: boolean;
};

export const PlayerScoreCardWrapper = styled.div<PlayerScoreCardWrapperProps>`
  background-color: #fdfdfb;
  border-radius: 16px;
  padding: ${(props) => (props.highlight ? '30px 10px 10px' : '10px')};
  margin-top: ${(props) => (props.highlight ? '-20px' : '0')};
`;

type PlayerScoreCardProps = {
  backgroundImg: string;
  highlight?: boolean;
};

export const PlayerScoreCard = styled.div<PlayerScoreCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  border-radius: 14px;
  margin-top: ${(props) => (props.highlight ? '-20px' : '0')};

  background: url(${(props) => props.backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  border: 1.2px solid #a3e8ff;
`;

export const PositionPosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 10px;

  h3,
  span {
    color: #0000003d;
  }

  h3 {
    font-size: 50px;
    font-weight: 600;
  }

  span {
    font-weight: 500;
  }
`;

type PlayerPointsContainerProps = {
  highlight?: boolean;
};

export const PlayerPointsContainer = styled.div<PlayerPointsContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: ${(props) => (props.highlight ? '160px' : '150px')};
`;

type PlayerScoreInfoProps = {
  backgroundImg: string;
};

export const PlayerScoreInfo = styled.div<PlayerScoreInfoProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;

  div {
    background: url(${(props) => props.backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 18px;
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: 0.5px solid #fff;
    background-color: transparent;
    width: 65px;
    height: 25px;
    border-radius: 14px;
    font-size: 13px;
    font-weight: 500;
    color: #0000007c;
  }

  h3 {
    font-weight: 600;
    font-size: 15px;
    margin-top: 5px;
  }
`;

type PlayerAvatarProps = {
  highlight?: boolean;
};

export const PlayerAvatar = styled.div<PlayerAvatarProps>`
  display: flex;

  img {
    height: ${(props) => (props.highlight ? '250px' : '210px')};
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const PlayerInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  margin-bottom: 20px;

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #101010;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    color: #696f8c;
    margin: 0;
    padding: 0;
  }
`;
