import {
  WheelSpinContainer,
  WheelSpinContainerWrapper,
  WheelSpinCard,
} from './wheel-spin.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function WheelSpin() {
  return (
    <WheelSpinContainer>
      <WheelSpinContainerWrapper>
        <WheelSpinCard backgroundImg={backgroundImg}>
          <h3>Wheel Spin</h3>

          <p>
            The Wheel Spin showcases top point earners, recognizing
            contributions and inspiring friendly competition.
          </p>
        </WheelSpinCard>
      </WheelSpinContainerWrapper>
    </WheelSpinContainer>
  );
}
