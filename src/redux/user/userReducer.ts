import {createReducer} from '@reduxjs/toolkit';

import {USER_ACTIONS} from '.';

import { User } from '../../types';

export interface UserState {
  currentUser: User | null,
}

const INITIAL_STATE : UserState = {
  currentUser: null,
};

export const userReducer = createReducer(INITIAL_STATE, {
  [USER_ACTIONS.SET_CURRENT_USER]: (state, {payload}) => ({...state, currentUser: payload}),
  [USER_ACTIONS.CLEAR_CURRENT_USER]: (state) => ({...state, currentUser: null}),
});
