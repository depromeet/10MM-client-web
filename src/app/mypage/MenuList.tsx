'use client';

import Link from 'next/link';
import LogoutDialog from '@/app/mypage/LogoutDialog';
import Icon, { type IconComponentMap } from '@/components/Icon';
import { ROUTER } from '@/constants/router';
import useModal from '@/hooks/useModal';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

function MenuList() {
  const { isOpen, openModal, closeModal } = useModal();

  const onLogoutClick = () => {
    openModal();
  };

  return (
    <>
      <ul className={listCss}>
        <MenuItem name="이용약관" iconName="terms" url={ROUTER.MYPAGE.TERMS} />
        <MenuItem name="로그아웃" iconName="log-out" url="#" onClick={onLogoutClick} />
        <MenuItem name="회원탈퇴" iconName="withdrawal" url={ROUTER.MYPAGE.WITHDRAWAL} />
      </ul>
      <LogoutDialog isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

export default MenuList;

const listCss = flex({
  flexDirection: 'column',
  gap: '7px',
  margin: '20px 16px 0',
});

interface MenuItemProps {
  name: string;
  iconName: keyof typeof IconComponentMap;
  url: string;
  onClick?: () => void;
}

function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} passHref>
      <li className={itemCss} onClick={props.onClick}>
        <Icon name={props.iconName} width={20} height={20} />
        <p className={nameCss}>{props.name}</p>
        <Icon name="arrow-forward" width={16} height={16} color="icon.tertiary" />
      </li>
    </Link>
  );
}

const itemCss = flex({
  backgroundColor: 'bg.surface3',
  borderRadius: '20px',
  padding: '18px 20px',
  alignItems: 'center',
});

const nameCss = css({ textStyle: 'body1', color: 'text.secondary', marginLeft: '8px', flex: 1 });
