import { useGetMissionSummaryList } from '@/apis/result';
import MissionBadge from '@/app/home/MissionBadge';
import { TwoLineListItem } from '@/components/ListItem';
import { MISSION_CATEGORY_LABEL } from '@/constants/mission';
import { css } from '@/styled-system/css';
import { motion } from 'framer-motion';

interface Props {
  selectDate: string;
}

function MissionList(props: Props) {
  const { data: selectSummaryListData } = useGetMissionSummaryList(props.selectDate);

  const missionList = selectSummaryListData?.missionList ?? [];
  return (
    <section className={sectionCss}>
      <div className={infoWrapperCss}>
        <div>
          <span>
            <b>전체</b>
          </span>
          <span>
            <b>{selectSummaryListData?.missionAllCount ?? 0}</b>
          </span>
        </div>
        <div>
          <span>성공</span>
          <span>{selectSummaryListData?.missionCompleteCount ?? 0}</span>
        </div>
        <div>
          <span>미완료</span>
          <span>{selectSummaryListData?.missionNoneCount ?? 0}</span>
        </div>
      </div>
      <motion.ul className={listCss} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {missionList.length === 0 && <div className={emptyTextCss}>등록된 미션 내역이 없습니다.</div>}
        {missionList.map((item) => (
          <TwoLineListItem
            key={item.missionId}
            badgeElement={<MissionBadge status={item.missionStatus} />}
            name={item.name}
            subName={MISSION_CATEGORY_LABEL[item.category].label}
            imageUrl={MISSION_CATEGORY_LABEL[item.category].imgUrl}
            isBackground={false}
          />
        ))}
      </motion.ul>
    </section>
  );
}

export default MissionList;

const sectionCss = css({
  backgroundColor: 'bg.surface1',
  borderRadius: '20px',
  padding: '20px',
  marginTop: '10px',
  height: '302px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const emptyTextCss = css({
  textStyle: 'subtitle3',
  color: 'text.quaternary',
  textAlign: 'center',
  marginTop: '88px',
});

const infoWrapperCss = css({
  display: 'flex',
  gap: '8px',

  '& div': {
    display: 'flex',
    gap: '4px',
  },
  '& span': {
    textStyle: 'body4',
    color: 'text.secondary',
  },
  '& b': {
    color: 'purple.purple700',
  },
});

const listCss = css({
  flex: 1,
  overflowY: 'auto',
});