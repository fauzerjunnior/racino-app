import { useLocation, useNavigate } from 'react-router-dom';

import { IconType } from 'react-icons';
import { IconContainer, ItemMenuContainer } from './item-menu.styles';

type ItemMenuProps = {
  icon: IconType;
  title: string;
  path?: string;
};

export default function ItemMenu({ icon, title, path }: ItemMenuProps) {
  const IconComponent = icon;

  const location = useLocation();
  const isActive = path ? location.pathname.split('/').includes(path) : false;

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!path) return;

    navigate(path, { replace: true });
  };

  return (
    <ItemMenuContainer isActive={isActive} onClick={handleNavigate}>
      <IconContainer>
        <IconComponent size={16} color="#757575" />
      </IconContainer>
      <span>{title}</span>
    </ItemMenuContainer>
  );
}
