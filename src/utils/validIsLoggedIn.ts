import { isLoggedIn } from '../security/authentication';
import { openNotificationWithIcon } from '../components/Notification';

export const validIsLoggedIn = (type = 'error', msg?: string) =>
  !isLoggedIn()
    ? msg && openNotificationWithIcon(type, 'Necessário fazer login', msg)
    : true;
