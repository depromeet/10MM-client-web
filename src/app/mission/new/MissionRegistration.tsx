'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CategoryBottomSheet from '@/app/mission/new/CategoryBottomSheet';
import PublicBottomSheet from '@/app/mission/new/PublicBottomSheet';
import Button from '@/components/Button/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input/Input';
import { ROUTER } from '@/constants/router';
import useToggle from '@/hooks/useToggle';
import { css } from '@/styled-system/css';
import { token } from '@/styled-system/tokens';

export default function MissionRegistration() {
  const router = useRouter();

  const [missionTitleInput, setMissionTitleInput] = useState('');
  const [missionContentInput, setMissionContentInput] = useState('');

  const [isCategoryShowing, toggleCategoryShowing] = useToggle();
  const [missionCategory, setMissionCategory] = useState<string | null>(null);

  const [isPublicShowing, togglePublicShowing] = useToggle();
  const [missionPublicSetting, setMissionPublicSetting] = useState<string>('팔로워에게 공개');

  const isSubmitButtonDisabled = !missionTitleInput || !missionCategory;

  // 미션 명
  const handleMissionTitleInput = (value: string) => {
    setMissionTitleInput(value);
  };
  const onTitleCloseIconClick = () => {
    setMissionTitleInput('');
  };

  // 미션 내용
  const handleMissionContentInput = (value: string) => {
    setMissionContentInput(value);
  };
  const onContentCloseIconClick = () => {
    setMissionContentInput('');
  };

  const handleSubmit = () => {
    if (!missionCategory) return;
    router.push(`${ROUTER.MISSION.STOP_WATCH('dummy')}?category=${missionCategory}`);
  };

  return (
    <section>
      <Input
        type="text"
        placeholder="미션명을 입력하세요"
        name="미션명"
        required
        iconName="input-close-circle"
        iconColor="icon.secondary"
        maxLength={20}
        value={missionTitleInput}
        onIconClick={onTitleCloseIconClick}
        onChange={handleMissionTitleInput}
      />
      <Input
        type="text"
        placeholder="미션 내용을 입력"
        name="미션내용"
        iconName="input-close-circle"
        iconColor="icon.secondary"
        maxLength={30}
        value={missionContentInput}
        onIconClick={onContentCloseIconClick}
        onChange={handleMissionContentInput}
      />

      {/* 카테고리 */}
      <span className={categoryTitleCss}>카테고리</span>
      <span className={asterisk}>*</span>

      <div className={categoryWrapperCss}>
        <p
          className={categoryTextCss}
          onClick={toggleCategoryShowing}
          style={{ color: missionCategory ? token.var(`colors.text.primary`) : token.var(`colors.gray.gray300`) }}
        >
          {missionCategory ?? '카테고리를 선택해주세요.'}
        </p>
        <Icon name={'input-arrow-down'} color={'icon.secondary'} className={iconCss} />
        <CategoryBottomSheet
          isShowing={isCategoryShowing}
          onClickOutside={toggleCategoryShowing}
          select={missionCategory}
          onSelect={setMissionCategory}
        />
      </div>

      {/* 공개설정 */}
      <span className={publicSettingTitleCss}>공개설정</span>

      <div className={publicSettingWrapperCss}>
        <p className={publicSettingTextCss} onClick={togglePublicShowing}>
          {missionPublicSetting}
        </p>
        <Icon name={'input-arrow-down'} color={'icon.secondary'} className={iconCss} />
        <PublicBottomSheet
          isShowing={isPublicShowing}
          onClickOutside={togglePublicShowing}
          select={missionPublicSetting}
          onSelect={setMissionPublicSetting}
        />
      </div>

      <div className={buttonContainerCss}>
        <Button variant={'cta'} size={'medium'} onClick={handleSubmit} disabled={isSubmitButtonDisabled}>
          등록
        </Button>
      </div>
    </section>
  );
}

const buttonContainerCss = css({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '48px',
});

const publicSettingWrapperCss = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: '1px',
  borderColor: 'border.default',
});
const publicSettingTitleCss = css({
  marginTop: '36px',
  textStyle: 'body2',
  color: 'text.primary',
});

const publicSettingTextCss = css({
  width: '100%',
  textStyle: 'subtitle3',
  color: 'text.secondary',
  borderColor: 'border.default',
  padding: '14px 4px',
});

const categoryWrapperCss = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: '1px',
  borderColor: 'border.default',
  marginBottom: '36px',
});
const categoryTitleCss = css({
  marginTop: '36px',
  textStyle: 'body2',
  color: 'text.primary',
});

const categoryTextCss = css({
  width: '100%',
  textStyle: 'subtitle3',
  color: 'text.secondary',
  padding: '14px 4px',
  borderColor: 'border.default',
});
const asterisk = css({
  color: 'red.red500',
  fontWeight: 'bold',
});

const iconCss = css({
  cursor: 'pointer',
});