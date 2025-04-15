import profileImg from '../../assets/images/profile.svg';
import { ProfileMenuContainer } from './profile-menu.styles';

export default function ProfileMenu() {
  return (
    <ProfileMenuContainer>
      <img src={profileImg} alt="" />
      <span>Maksym Dzhavala</span>
    </ProfileMenuContainer>
  );
}
