import Image from 'next/image';
import { type MissionListItemType } from '@/components/List/List.types';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

function MissionListItem(props: MissionListItemType) {
  return (
    <div className={containerCss}>
      <Image src={props.imageUrl} alt="mission list item" width={36} height={36} />
      <div className={textWrapperCss}>
        <p className={categoryCss}>{props.category}</p>
        <p className={missionTitleCss}>{props.missionTitle}</p>
      </div>
      {Boolean(props.badgeElement) && props.badgeElement}
    </div>
  );
}

export default MissionListItem;

const containerCss = flex({
  gap: '10px',
  padding: '16px',
  alignItems: 'center',
  backgroundColor: 'bg.surface3',
  borderRadius: '22px',
});
const textWrapperCss = flex({ flex: 1, flexDirection: 'column', gap: '2px' });
const categoryCss = css({ color: 'text.tertiary', textStyle: 'body3' });
const missionTitleCss = css({ color: 'text.secondary', textStyle: 'body2' });
