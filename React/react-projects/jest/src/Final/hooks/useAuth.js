import {useSelector} from 'react-redux'
import {selectIsLoggedIn} from '../features/auth/authSelectors'

export default function useAuth(){
  return useSelector(selectIsLoggedIn)
}
