import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { toggleTheme, setLanguage } from '@/store/settingsSlice';
import { UserSettings } from '@/types/settings';

export const useSettings = () => {
 // dispatch 사용 시 타입을 명시하면 미들웨어(Persist 등)와 관련된 액션을 다룰 때 에러를 방지합니다.
  const dispatch = useDispatch<AppDispatch>();
  const { theme, lang } = useSelector((state: RootState) => state.settings);

  return {
    theme,
    lang,
    // 복잡한 dispatch 호출을 간단한 함수로 래핑하여 리턴합니다.
    handleToggleTheme: () => dispatch(toggleTheme()),
    handleSetLanguage: (newLang: UserSettings['lang']) => dispatch(setLanguage(newLang)),
  };
};