import { type SVGProps } from 'react';
import AlarmIcon from '@/components/Icon/AlarmIcon';
import ArrowBackIcon from '@/components/Icon/ArrowBackIcon';
import ArrowDiagonalIcon from '@/components/Icon/ArrowDiagonalIcon';
import ArrowDownIcon from '@/components/Icon/ArrowDownIcon';
import ArrowFoWardIcon from '@/components/Icon/ArrowFowardIcon';
import CameraIcon from '@/components/Icon/CameraIcon';
import CheckCircleIcon from '@/components/Icon/CheckCircleIcon';
import CloseCircleIcon from '@/components/Icon/CloseCircleIcon';
import CloseIcon from '@/components/Icon/CloseIcon';
import CopyLinkIcon from '@/components/Icon/CopyLinkIcon';
import LightningIcon from '@/components/Icon/LightningIcon';
import MenuIcon from '@/components/Icon/MenuIcon';
import NavigationHomeIcon from '@/components/Icon/NavigationHomeIcon';
import NavigationMypageIcon from '@/components/Icon/NavigationMypageIcon';
import NavigationResultIcon from '@/components/Icon/NavigationResultIcon';
import NavigationUsersearchIcon from '@/components/Icon/NavigationUsersearchIcon';
import PlusCircleIcon from '@/components/Icon/PlusCircleIcon';
import PlusIcon from '@/components/Icon/PlusIcon';
import ShareIcon from '@/components/Icon/ShareIcon';
import { type ColorToken } from '@styled-system/tokens';

import EllipseCameraIcon from './EllipseCameraIcon';
import InputArrowDownIcon from './InputArrowDownIcon';
import InputCloseCircleIcon from './InputCloseCircleIcon';
import NormalClose from './NormalClose';
import PlusCircleLarge from './PlusCircleLargeIcon';

export const IconComponentMap = {
  'arrow-back': ArrowBackIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-forward': ArrowFoWardIcon,
  'check-circle': CheckCircleIcon,
  share: ShareIcon,
  alarm: AlarmIcon,
  plus: PlusIcon,
  menu: MenuIcon,
  'copy-link': CopyLinkIcon,
  'arrow-diagonal': ArrowDiagonalIcon,
  'close-circle': CloseCircleIcon,
  'navigation-home': NavigationHomeIcon,
  'navigation-result': NavigationResultIcon,
  'navigation-mypage': NavigationMypageIcon,
  'navigation-usersearch': NavigationUsersearchIcon,
  camera: CameraIcon,
  lightning: LightningIcon,
  'plus-circle': PlusCircleIcon,
  close: CloseIcon,
  'plus-circle-large': PlusCircleLarge,
  'ellipse-camera-icon': EllipseCameraIcon,
  'normal-close': NormalClose,
  'input-close-circle': InputCloseCircleIcon,
  'input-arrow-down': InputArrowDownIcon,
} as const;

interface Props extends IconComponentProps {
  name: keyof typeof IconComponentMap;
  color?: ColorToken;
}

export interface IconComponentProps extends SVGProps<SVGSVGElement> {
  color?: ColorToken;
  onClick?: () => void;
}

export default function Icon({ name, ...props }: Props) {
  const IconComponent = IconComponentMap[name];

  return <IconComponent {...props} />;
}

export const DEFAULT_ICON_COLOR = '#D8D8DD';
