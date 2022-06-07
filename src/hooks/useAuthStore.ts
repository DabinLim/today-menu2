import {useSelector} from 'react-redux';
import {RootState} from '../redux/configStore';

export default function useAuthStore() {
  const user = useSelector((state: RootState) => state.auth.user);

  return {
    user,
  };
}
