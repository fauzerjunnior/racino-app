import {
  ChallengesContainer,
  ChallengesContainerWrapper,
  ChallengesCard,
} from './challenges.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function Challenges() {
  return (
    <ChallengesContainer>
      <ChallengesContainerWrapper>
        <ChallengesCard backgroundImg={backgroundImg}>
          <h3>Challenges</h3>

          <p>
            The Challenges showcases top point earners, recognizing
            contributions and inspiring friendly competition.
          </p>
        </ChallengesCard>
      </ChallengesContainerWrapper>
    </ChallengesContainer>
  );
}
