import {
  SettingsContainer,
  SettingsContainerWrapper,
  SettingsCard,
} from './settings.styles';

import backgroundImg from '../../assets/images/background.svg';

export default function Settings() {
  return (
    <SettingsContainer>
      <SettingsContainerWrapper>
        <SettingsCard backgroundImg={backgroundImg}>
          <h3>Settings</h3>

          <p>
            The Settings showcases top point earners, recognizing contributions
            and inspiring friendly competition.
          </p>
        </SettingsCard>
      </SettingsContainerWrapper>
    </SettingsContainer>
  );
}
