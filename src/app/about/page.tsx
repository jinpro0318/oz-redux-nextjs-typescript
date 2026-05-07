'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function About() {
  const { lang } = useSelector((state: RootState) => state.settings);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{lang === 'ko' ? '소개 페이지' : 'About Page'}</h1>
      <p>페이지를 이동해도 테마와 언어가 유지되는지 확인하세요.</p>
    </div>
  );
}