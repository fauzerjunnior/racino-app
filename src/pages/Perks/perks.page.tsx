import {
  PerksContainer,
  PerksContainerWrapper,
  PerksCard,
} from './perks.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function Perks() {
  return (
    <PerksContainer>
      <PerksContainerWrapper>
        <PerksCard backgroundImg={backgroundImg}>
          <h3>Perks</h3>

          <p>
            The Perks showcases top point earners, recognizing contributions and
            inspiring friendly competition.
          </p>
        </PerksCard>
      </PerksContainerWrapper>
    </PerksContainer>
  );
}
