import { useState } from 'react';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import Header from '@/components/Header';
import { css } from '@/styled-system/css';
import { type Meta } from '@storybook/react';

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
};

export default meta;

export function Default() {
  const [isShowing, setIsShowing] = useState(false);
  const toggleShowing = () => setIsShowing((prev) => !prev);

  return (
    <>
      <button
        type="button"
        onClick={toggleShowing}
        className={css({
          color: 'white',
        })}
      >
        toggle
      </button>

      <BottomSheet
        onClickOutside={toggleShowing}
        isShowing={isShowing}
        headerElement={<Header.Icon title="Header" isBackgroundTransparent />}
      >
        <div
          className={css({
            color: 'white',
          })}
        >
          content
        </div>
      </BottomSheet>
    </>
  );
}
