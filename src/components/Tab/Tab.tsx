'use client';

import { css } from '@styled-system/css';

import { type TabProps } from './Tab.types';
import TabParts from './TabParts';

export default function Tab({ tabs, activeTab, onTabClick }: TabProps) {
  return (
    <div className={tabWrapperCss}>
      {tabs.map((tab) => (
        <TabParts key={tab.id} {...tab} isActive={tab.id === activeTab} onTabClick={onTabClick} />
      ))}
    </div>
  );
}

const tabWrapperCss = css({
  // padding: '16px 16px 4px 16px',
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  width: '100%',
});
