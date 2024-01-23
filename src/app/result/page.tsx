'use client';

import Image from 'next/image';
import { useGetMissionSummary } from '@/apis/mission';
import AppBarBottom from '@/components/AppBarBottom/AppBarBottom';
import Banner from '@/components/Banner/Banner';
// import Button from '@/components/Button/Button';
import Tab from '@/components/Tab/Tab';
import { css } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import { getLevel } from '@/utils/result';

import LevelStatus from './LevelStatus/LevelStatus';

const TAB = [
  {
    id: 'result',
    tabName: '전체 현황',
  },
];

function ResultPage() {
  const { data } = useGetMissionSummary();

  const symbolStack = data?.symbolStack ?? 0;
  const currentLevel = getLevel(symbolStack);
  const totalTime = `${data?.totalMissionHour ?? 0}h ${data?.totalMissionMinute ?? 0}m`;
  const totalMissionAttainRate = `${data?.totalMissionAttainRate ?? 0}%`;

  return (
    <div>
      <section className={topWrapperCss}>
        <Tab tabs={TAB} activeTab="result" />
        {/* <Button size="small" variant="secondary" className={buttonCss}>
          레벨 안내
        </Button> */}
      </section>
      <section className={imageSectionCss}>
        <Image className={'character'} src={currentLevel.imageUrl} alt="10mm character" fill />
        <div className={bgImgWrapper}>
          <Image src="/assets/result/character-bg-gradient.svg" alt="10mm character bg" fill />
        </div>
      </section>
      <LevelStatus current={symbolStack} level={currentLevel} />
      <section className={bannerSectionCss}>
        <Banner type="card" description="전체 누적 시간" iconName="alarm" title={totalTime} />
        <Banner type="card" description="총 미션 달성률" iconName="alarm" title={totalMissionAttainRate} />
      </section>
      <AppBarBottom />
    </div>
  );
}

export default ResultPage;

const topWrapperCss = flex({
  padding: '16px 16px 4px 16px',
});

// const buttonCss = css({
//   margin: '11px 16px 4px 0 ',
// });

const bannerSectionCss = grid({
  gridTemplateColumns: '1fr 1fr',
  padding: '20px 16px',
  gap: '10px',
  maxWidth: '376px',
  margin: '0 auto',
});

const imageSectionCss = css({
  margin: '43px auto 12px',
  position: 'relative',
  height: '210px',

  '& img.character': {
    height: '210px !important',
    objectFit: 'contain',
  },

  '& img.bg': {
    position: 'absolute',
    transform: 'translateY(-20%);',
    width: '100vw !important',
    height: '382px !important',
    objectFit: 'contain',
  },
});

const bgImgWrapper = css({
  transform: 'translateY(-25%);',
  height: '382px',

  '& img': {
    objectFit: 'contain',
  },
});
