import { useSelector } from 'react-redux';
import { NavbarMenuItem } from '../components/Navbar/NavbarMenu';
import { GlobalState } from '../redux/reducers/rootReducer';

const useNavbar = (): NavbarMenuItem[] => {
  const authState: boolean | null = useSelector<GlobalState, boolean | null>((state) => {
    return state.appState.auth;
  });

  if (authState) {
    return [
    ];
  } return [
    {
      text: 'Login',
      route: '/login',
    },
    {
      text: 'Singup',
      route: '/singup',
    },
  ];
};

export default useNavbar;
