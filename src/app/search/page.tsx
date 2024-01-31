'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSuspenseGetSearchNickname } from '@/apis/member';
import FollowerItem from '@/components/ListItem/Follow/FollowerItem';
import FollowingItem from '@/components/ListItem/Follow/FollowingItem';
import { ProfileItemSkeleton } from '@/components/ListItem/ProfileListItem';
import SearchBar from '@/components/SearchBar/SearchBar';
import { ROUTER } from '@/constants/router';
import { css } from '@/styled-system/css';

function SearchPage() {
  const [input, setInput] = useState('');
  const filteredInput = input.trim();
  return (
    <>
      <SearchBar placeholder="닉네임을 검색해 주세요." value={input} onChange={setInput} />
      <Suspense
        fallback={
          <>
            <ProfileItemSkeleton />
            <ProfileItemSkeleton />
            <ProfileItemSkeleton />
            <ProfileItemSkeleton />
          </>
        }
      >
        <List nickname={filteredInput} />
      </Suspense>
    </>
  );
}

export default SearchPage;

function List({ nickname }: { nickname: string }) {
  const { data, refetch } = useSuspenseGetSearchNickname(nickname);

  const onButtonClick = () => {
    refetch();
  };

  return (
    <ul className={listContainer}>
      {data.map((item) => {
        const params = {
          name: item.nickname,
          memberId: item.memberId,
          thumbnail: {
            url: item.profileImageUrl,
            alt: item.nickname,
            variant: 'filled',
          },
          onButtonClick,
        };
        return (
          <Link key={item.memberId} href={ROUTER.PROFILE.DETAIL(item.memberId)}>
            {item.followStatus === 'FOLLOWING' ? (
              <FollowingItem {...params} />
            ) : (
              <FollowerItem followStatus={item.followStatus} {...params} />
            )}
          </Link>
        );
      })}
    </ul>
  );
}

const listContainer = css({
  margin: '8px 0',
  flex: 1,
  minH: '0',
  overflow: 'auto',
});