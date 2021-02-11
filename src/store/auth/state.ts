import { Auth } from '@/data/api/model';

export type State = {
  userID: string;
  token: string;
};

const localUserData = localStorage.getItem('userData');
const userData: Auth = localUserData ? JSON.parse(localUserData) : {};

export const state: State = {
  userID: userData.user_uuid || '',
  token: userData.token || ''
};
