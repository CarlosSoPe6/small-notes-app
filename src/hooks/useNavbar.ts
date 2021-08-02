import { useSelector } from 'react-redux';
import { NavbarMenuItem } from '../components/Navbar/NavbarMenu';
import routes from '../config/routes';
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
      route: routes.LOG_IN,
    },
    {
      text: 'Singup',
      route: routes.SING_UP,
    },
  ];
};

export default useNavbar;
