import LocalStorageService from '@/data/api/service/local-storage';

export type State = {
  userID: string;
  token: string;
};

const userID = LocalStorageService.getUserID() || '';
const accessToken = LocalStorageService.getAccessToken() || '';

export const state: State = {
  userID: userID,
  token: accessToken
};
