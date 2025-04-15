import {
  PlayerScoreCard,
  LeaderboardContainer,
  LeaderboardContainerWrapper,
  LeaderboardCard,
  PlayerInformation,
  PositionPosition,
  PlayerScoreInfo,
  PlayerPointsContainer,
  PlayerAvatar,
  Flex,
  PlayerScoreCardWrapper,
} from './leaderboard.styles';

import backgroundImg from '../../assets/images/background.svg';

import goldBg from '../../assets/images/gold-bg.svg';
import silverBg from '../../assets/images/silver-bg.svg';
import bronzeBg from '../../assets/images/bronze-bg.svg';

import avatarAimee from '../../assets/images/avatar-aimee.svg';
import avatarKhloe from '../../assets/images/avatar-khloe.svg';
import avatarAlex from '../../assets/images/avatar-alex.svg';

export default function Leaderboard() {
  return (
    <LeaderboardContainer>
      <LeaderboardContainerWrapper>
        <LeaderboardCard backgroundImg={backgroundImg}>
          <h3>Leaderboard</h3>

          <p>
            The Leaderboard showcases top point earners, recognizing
            contributions and inspiring friendly competition.
          </p>
        </LeaderboardCard>
      </LeaderboardContainerWrapper>

      <LeaderboardContainerWrapper>
        <LeaderboardCard backgroundImg={backgroundImg}>
          <Flex>
            <PlayerScoreCardWrapper>
              <PlayerScoreCard backgroundImg={silverBg}>
                <Flex>
                  <PlayerAvatar>
                    <img src={avatarKhloe} alt="" />
                  </PlayerAvatar>

                  <PlayerPointsContainer>
                    <PositionPosition>
                      <h3>2</h3>
                      <span>nd</span>
                    </PositionPosition>

                    <PlayerScoreInfo backgroundImg={silverBg}>
                      <div>
                        <button>Silver</button>
                      </div>
                      <h3>9900 PTS</h3>
                    </PlayerScoreInfo>
                  </PlayerPointsContainer>
                </Flex>

                <PlayerInformation>
                  <h3>Khloe Stokes</h3>
                  <p>Mortgage Underwriter</p>
                </PlayerInformation>
              </PlayerScoreCard>
            </PlayerScoreCardWrapper>

            <PlayerScoreCardWrapper highlight>
              <PlayerScoreCard backgroundImg={goldBg} highlight>
                <Flex>
                  <PlayerAvatar highlight>
                    <img src={avatarAimee} alt="" />
                  </PlayerAvatar>

                  <PlayerPointsContainer highlight>
                    <PositionPosition>
                      <h3>1</h3>
                      <span>nd</span>
                    </PositionPosition>

                    <PlayerScoreInfo backgroundImg={goldBg}>
                      <div>
                        <button>Gold</button>
                      </div>
                      <h3>10550 PTS</h3>
                    </PlayerScoreInfo>
                  </PlayerPointsContainer>
                </Flex>

                <PlayerInformation>
                  <h3>Aimee Boudrie</h3>
                  <p>Mortgage Underwriter</p>
                </PlayerInformation>
              </PlayerScoreCard>
            </PlayerScoreCardWrapper>

            <PlayerScoreCardWrapper>
              <PlayerScoreCard backgroundImg={bronzeBg}>
                <Flex>
                  <PlayerAvatar>
                    <img src={avatarAlex} alt="" />
                  </PlayerAvatar>

                  <PlayerPointsContainer>
                    <PositionPosition>
                      <h3>3</h3>
                      <span>nd</span>
                    </PositionPosition>

                    <PlayerScoreInfo backgroundImg={bronzeBg}>
                      <div>
                        <button>Bronze</button>
                      </div>
                      <h3>9700 PTS</h3>
                    </PlayerScoreInfo>
                  </PlayerPointsContainer>
                </Flex>

                <PlayerInformation>
                  <h3>Alex Ludwig</h3>
                  <p>Mortgage Underwriter</p>
                </PlayerInformation>
              </PlayerScoreCard>
            </PlayerScoreCardWrapper>
          </Flex>
        </LeaderboardCard>
      </LeaderboardContainerWrapper>

      <LeaderboardContainerWrapper>
        <LeaderboardCard backgroundImg={backgroundImg}>
          <h3>Table</h3>
        </LeaderboardCard>
      </LeaderboardContainerWrapper>
    </LeaderboardContainer>
  );
}
