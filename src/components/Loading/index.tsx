'use client';
import React from 'react';
import Image from 'next/image';
import Portal from '@/components/portal/Portal';
import { css } from '@/styled-system/css';

function Loading() {
  return (
    <Portal>
      <article className={containerCss}>
        <Image src="/assets/spinner.svg" width={70} height={70} alt="loading" />
      </article>
    </Portal>
  );
}

export default Loading;

const containerCss = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.50);',
  zIndex: 'loading',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});