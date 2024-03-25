import MissionRegistration from '@/app/mission/new/MissionRegistration';
import Header from '@/components/Header/Header';
import { css } from '@styled-system/css';

export default function MissionNewPage() {
  return (
    <main className={mainWrapperCss}>
      <Header title={'미션 생성'} rightAction="none" />
      <div className={containerCss}>
        <h1 className={mainTitleCss}>
          하루 <strong>10분</strong>씩 2주 동안
          <br />
          어떤 일에 투자하고 싶은가요?
        </h1>
        <MissionRegistration />
      </div>
    </main>
  );
}

const mainWrapperCss = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
});

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  padding: '24px 16px',
});

const mainTitleCss = css({
  marginTop: '2px',
  marginBottom: '36px',

  textStyle: 'title2',

  color: 'text.primary',
  '& strong': {
    color: 'purple.purple800',
    textStyle: 'title2',
  },
});
