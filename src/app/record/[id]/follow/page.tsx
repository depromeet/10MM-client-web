import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import MissionRecordDetail from '@/pages/record/[id]/detail/MissionRecordDetail';
import { css } from '@styled-system/css';

function FollowMissionRecordDetailPage() {
  return (
    <main className={mainWrapperCss}>
      <Header rightAction={'none'} title={'미션 내역'} />
      <Suspense>
        {/* TODO : record id 잘 넣기 */}
        <MissionRecordDetail isFollow recordId="1" />
      </Suspense>
    </main>
  );
}

export default FollowMissionRecordDetailPage;

const mainWrapperCss = css({
  width: '100%',
});
