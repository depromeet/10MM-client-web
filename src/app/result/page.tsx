// 'use client';

import Button from '@/components/Button/Button';
import Tab from '@/components/Tab/Tab';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

import LevelStatus from './LevelStatus/LevelStatus';

const TAB = [
  {
    id: 'result',
    tabName: '전체 현황',
  },
];

function ResultPage() {
  return (
    <div>
      <section className={topWrapperCss}>
        <Tab tabs={TAB} activeTab="result" />
        <Button size="small" variant="secondary" className={buttonCss}>
          레벨 안내
        </Button>
      </section>
      <section>
        <LevelStatus percent={50} />
      </section>
    </div>
  );
}

export default ResultPage;

const topWrapperCss = flex({});
const buttonCss = css({
  margin: '11px 16px 4px 0 ',
});
