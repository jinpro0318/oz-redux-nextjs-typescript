'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useSelector((state: RootState) => state.settings);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ minHeight: '100vh' }}>{children}</div>;
  }

  return (
    <div style={{ 
      // 💡 [과제 4] 테마에 따른 배경/글자색 변경
      backgroundColor: theme === 'light' ? '#ffffff' : '#222222', 
      color: theme === 'light' ? '#000000' : '#ffffff',
      minHeight: '100vh',
      transition: 'all 0.3s' 
    }}>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}