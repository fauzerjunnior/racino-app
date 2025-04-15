import {
  GivingContainer,
  GivingContainerWrapper,
  GivingCard,
} from './giving.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function Giving() {
  return (
    <GivingContainer>
      <GivingContainerWrapper>
        <GivingCard backgroundImg={backgroundImg}>
          <h3>Giving</h3>

          <p>
            The Giving showcases top point earners, recognizing contributions
            and inspiring friendly competition.
          </p>
        </GivingCard>
      </GivingContainerWrapper>
    </GivingContainer>
  );
}
