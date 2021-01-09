import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  user => user.currentUser
);

export const selectIsLoggedIn = createSelector(
  selectCurrentUser,
  currentUser => !!currentUser
);
