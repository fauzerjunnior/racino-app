import {
  MyOfficeContainer,
  MyOfficeContainerWrapper,
  MyOfficeCard,
} from './my-office.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function MyOffice() {
  return (
    <MyOfficeContainer>
      <MyOfficeContainerWrapper>
        <MyOfficeCard backgroundImg={backgroundImg}>
          <h3>My Office</h3>

          <p>
            The My Office showcases top point earners, recognizing contributions
            and inspiring friendly competition.
          </p>
        </MyOfficeCard>
      </MyOfficeContainerWrapper>
    </MyOfficeContainer>
  );
}
