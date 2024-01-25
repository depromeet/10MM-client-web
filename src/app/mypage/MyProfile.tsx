import { type ChangeEvent, useRef } from 'react';
import Link from 'next/link';
import { useGetMembersMe } from '@/apis/member';
import { useGetMissionSummary } from '@/apis/mission';
import Badge from '@/components/Badge/Badge';
import Banner from '@/components/Banner/Banner';
import Tab from '@/components/Tab/Tab';
import Thumbnail from '@/components/Thumbnail/Thumbnail';
import { useImage } from '@/hooks/useImage';
import { css } from '@/styled-system/css';
import { getLevel } from '@/utils/result';

import MissionList from './MissionList';

const tabs = [
  {
    tabName: '미션 목록',
    id: 'mission-list',
  },
];

export default function MyProfile() {
  const { data } = useGetMembersMe();
  const { data: missionSummaryData } = useGetMissionSummary();

  const symbolStack = missionSummaryData?.symbolStack ?? 0;
  const currentLevel = getLevel(symbolStack);

  const imageRef = useRef<HTMLInputElement>(null);

  const { uploadImageChange, imagePreview } = useImage(data?.profileImageUrl || '');

  const handleUploadChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (!files) return;

    uploadImageChange(files);
  };

  const handleImageClick = () => {
    imageRef.current?.click();
  };
  return (
    <div className={containerCss}>
      <section className={myTabContainerCss}>
        <section className={thumbnailWrapperCss} onClick={handleImageClick}>
          <input
            accept="image/x-png,image/jpeg,image/gif"
            onChange={handleUploadChange}
            className={hiddenInputCss}
            ref={imageRef}
            type="file"
          />
          {imagePreview ? (
            <Thumbnail size="h80" url={imagePreview} variant={'filled'} />
          ) : (
            <Thumbnail size="h80" variant={'null'} />
          )}
        </section>
        <div className={myTabCss}>
          <div>
            <p className={userNameCss}>{data?.nickname}</p>
            {/*<span className={followerTabCss}>*/}
            {/*  팔로잉 {FOLLOWING} &nbsp; 팔로워 {FOLLOWER}*/}
            {/*</span>*/}
          </div>
          <Link href={'mypage/profile_modify'}>
            <Badge color="gray">프로필 수정</Badge>
          </Link>
        </div>
        <Banner
          type="level"
          amount={currentLevel.level}
          iconName="alarm"
          level={currentLevel.label}
          imageUrl={currentLevel.imageUrl}
        />
        <div className={tabWrapper}>
          <Tab tabs={tabs} activeTab={'mission-list'} />
        </div>
        <MissionList />
        <div className={spaceCss} />
      </section>
    </div>
  );
}

const tabWrapper = css({
  margin: '20px 0',
  padding: '16px 16px 0 16px',
});

const spaceCss = css({
  height: '50px',
});

const containerCss = css({
  paddingTop: '184px',
  flex: 1,
  zIndex: 3,
});

const myTabContainerCss = css({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: 'bg.surface2',
  borderTopRightRadius: '28px',
  borderTopLeftRadius: '28px',
  padding: '52px 24px 0',
});
const userNameCss = css({
  color: 'text.primary',
  fontSize: 'subtitle2',
  fontWeight: 'semibold',
});
// const followerTabCss = css({
//   color: 'text.secondary',
//   marginTop: '6px',
// });

const myTabCss = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
const hiddenInputCss = css({
  display: 'none',
});

const thumbnailWrapperCss = css({
  position: 'absolute',
  top: '-40px',
  left: '50%',
  transform: 'translateX(-50%)',
});
