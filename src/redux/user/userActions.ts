import { User } from '../../types';

export enum USER_ACTIONS {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER',
}

interface UserActionSetCurrentUser {
  type: USER_ACTIONS.SET_CURRENT_USER,
  payload: User,
}

interface UserActionClearCurrentUser {
  type: USER_ACTIONS.CLEAR_CURRENT_USER,
}

export type UserAction = UserActionSetCurrentUser | UserActionClearCurrentUser;

export const setCurrentUser = (user: User): UserAction => ({
  type: USER_ACTIONS.SET_CURRENT_USER,
  payload: user,
});

export const clearCurrentUser = (): UserAction => ({
  type: USER_ACTIONS.CLEAR_CURRENT_USER,
});
