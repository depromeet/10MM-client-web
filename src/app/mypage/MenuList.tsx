import Link from 'next/link';
import Icon, { type IconComponentMap } from '@/components/Icon';
import { ROUTER } from '@/constants/router';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

function MenuList() {
  return (
    <ul className={listCss}>
      <MenuItem name="이용약관" iconName="terms" url={ROUTER.MYPAGE.TERMS} />
      <MenuItem name="로그인 정보" iconName="log-in-information" url={ROUTER.MYPAGE.LOGIN_INFO} />
      <MenuItem name="로그아웃" iconName="log-out" url="#" />
      <MenuItem name="회원탈퇴" iconName="withdrawal" url="#" />
    </ul>
  );
}

export default MenuList;

const listCss = flex({
  flexDirection: 'column',
  gap: '7px',
  margin: '20px 16px 0',
});

function MenuItem(props: { name: string; iconName: keyof typeof IconComponentMap; url: string }) {
  return (
    <Link href={props.url} passHref>
      <li className={itemCss}>
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