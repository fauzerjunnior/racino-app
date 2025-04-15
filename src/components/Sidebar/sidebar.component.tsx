import logo from '../../assets/images/logo.svg';
import ItemMenu from '../ItemMenu/item-menu.component';
import {
  ItemMenuContainer,
  Logo,
  SidebarContainer,
  SidebarContainerWrapper,
} from './sidebar.styles';

import { BiBarChartSquare } from 'react-icons/bi';
import { PiMonitor, PiShoppingCartSimple } from 'react-icons/pi';
import { TbLocation } from 'react-icons/tb';
import {
  MdSpeed,
  MdOutlineTrendingUp,
  MdOutlineSettings,
} from 'react-icons/md';
import { LuFlag } from 'react-icons/lu';
import ProfileMenu from '../ProfileMenu/profile-menu.component';
import ScoreBox from '../ScoreBox/score-box.component';

export default function Sidebar() {
  return (
    <SidebarContainerWrapper>
      <SidebarContainer>
        <div>
          <Logo src={logo} />

          <ScoreBox />

          <ItemMenuContainer>
            <ItemMenu icon={PiMonitor} title="My Office" path="my-office" />
            <ItemMenu icon={TbLocation} title="Giving" path="giving" />
            <ItemMenu
              icon={BiBarChartSquare}
              title="Leaderboard"
              path="leaderboard"
            />
            <ItemMenu icon={PiShoppingCartSimple} title="Perks" path="perks" />
            <ItemMenu icon={MdSpeed} title="Wheel Spin" path="wheel-spin" />
            <ItemMenu icon={LuFlag} title="Challenges" path="challenges" />
            <ItemMenu icon={MdOutlineTrendingUp} title="Feed" path="feed" />
            <ItemMenu
              icon={MdOutlineSettings}
              title="Settings"
              path="settings"
            />
          </ItemMenuContainer>
        </div>

        <ProfileMenu />
      </SidebarContainer>
    </SidebarContainerWrapper>
  );
}
