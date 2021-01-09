import {RootState} from '../rootReducer';
import {createSelector} from '@reduxjs/toolkit';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  selectDirectory, (directory) => directory.sections);

export const selectDirectoryShop = createSelector(
  selectDirectory, (directory) => directory.shop);

export const selectDirectoryShopCategory = (state: RootState) => (path: string) => selectDirectoryShop(state)[path];
