import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUser, clearUser} from '../redux/slices/authSlice';

export default function useAuthActions() {
  const dispatch = useDispatch();
  // NOTE: hooks 사용 컴포넌트 리렌더시 함수가 새로 선언되어 생기는 side effect 방지를 위한 최적화
  return useMemo(
    () =>
      bindActionCreators(
        {
          setUser,
          clearUser,
        },
        dispatch,
      ),
    [dispatch],
  );
}
