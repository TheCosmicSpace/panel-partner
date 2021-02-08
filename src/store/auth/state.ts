export type State = {
  user: object | string | null;
};

let userData = localStorage.getItem('userData');
if (userData) userData = JSON.parse(userData);

export const state: State = {
  user: userData
};
