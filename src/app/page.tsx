'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Home() {
  const { lang } = useSelector((state: RootState) => state.settings);

  return (
    <main>
      {/* 💡 [과제 6] 현재 lang 상태에 따른 다국어 조건부 렌더링 */}
      <h1>{lang === 'ko' ? '환영합니다!' : 'Welcome!'}</h1>
      <p>전역 상태 관리 대시보드 메인 페이지입니다.</p>
    </main>
  );
}