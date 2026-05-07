'use client';
import { useSettings } from '@/hooks/useSettings'; // 만든 훅 불러오기
import Link from 'next/link';

export default function Navbar() {
  // 훅 하나로 상태와 액션 함수를 모두 가져옵니다.
  const { theme, lang, handleToggleTheme, handleSetLanguage } = useSettings();

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '10px' }}>
      <button onClick={handleToggleTheme}>모드: {theme}</button>
      <button onClick={() => handleSetLanguage('ko')}>KO</button>
      <button onClick={() => handleSetLanguage('en')}>EN</button>
      
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
        <Link href="/">홈</Link>
        <Link href="/about">소개</Link>
      </div>
    </nav>
  );
}