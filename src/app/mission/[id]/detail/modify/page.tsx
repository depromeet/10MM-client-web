'use client';

import { useState } from 'react';
import MISSION_APIS, { type MissionVisibility, useModifyMissionMutation } from '@/apis/mission';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { type DropdownValueType } from '@/components/Input/Input.types';
import { PUBLIC_SETTING_LIST } from '@/constants/mission';
import { css } from '@styled-system/css';

export default function MissionModifyPage() {
  //TODO: Header onBackButton={미션수정 api 콜 함수}

  const { mutate } = useModifyMissionMutation(1);
  const PREVIOUS_MISSIONTITLE = '스쿼트해서 튼튼해지자!';
  const PREVIOUS_MISSIONCONTENT = '스쿼트 100개하기';
  const PREVIOUS_PUBLIC_SETTING = PUBLIC_SETTING_LIST[0];

  //이전 상태
  const [missionTitleInput, setMissionTitleInput] = useState(PREVIOUS_MISSIONTITLE);
  const [missionContentInput, setMissionContentInput] = useState(PREVIOUS_MISSIONCONTENT);
  const [missionPublicSetting, setMissionPublicSetting] =
    useState<DropdownValueType<MissionVisibility>>(PREVIOUS_PUBLIC_SETTING);

  const handleMissionTitleInput = (value: string) => {
    setMissionTitleInput(value);
  };

  const handleMissionContentInput = (value: string) => {
    setMissionContentInput(value);
  };
  const isButtonDisabled =
    (missionTitleInput === PREVIOUS_MISSIONTITLE || missionTitleInput.length === 0) &&
    missionContentInput === PREVIOUS_MISSIONCONTENT &&
    missionPublicSetting === PREVIOUS_PUBLIC_SETTING;

  const modifyTest = () => {
    alert('2');
    mutate({
      data: {
        missionId: 1,
        name: missionTitleInput,
        content: missionContentInput,
        visibility: missionPublicSetting.value,
      },
    });
  };

  return (
    <main className={mainWrapperCss}>
      <Header
        rightAction="text-button"
        title={'미션 수정'}
        rightButtonText={'저장'}
        onButtonClick={modifyTest}
        rightButtonDisabled={isButtonDisabled}
      />
      <div className={containerCss}>
        <Input
          type="text"
          placeholder="미션명을 입력하세요"
          name="미션명"
          required
          maxLength={20}
          value={missionTitleInput}
          onChange={handleMissionTitleInput}
        />
        <Input
          type="text"
          placeholder="미션 내용을 입력"
          name="미션내용"
          maxLength={30}
          value={missionContentInput}
          onChange={handleMissionContentInput}
        />

        <Input
          variant="drop-down"
          title="공개설정"
          list={PUBLIC_SETTING_LIST}
          selected={missionPublicSetting}
          onSelect={(item) => setMissionPublicSetting(item)}
        />
      </div>
    </main>
  );
}

const mainWrapperCss = css({
  height: '100vh',
  width: '100%',
  overflowY: 'hidden',
});

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  padding: '24px 16px',
});
