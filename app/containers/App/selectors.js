/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.global;

const selectRoute = state => state.router;

const selectAuth = state => state.auth;

const makeSelectCurrentUser = () =>
  createSelector(
    selectAuth,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('loading'),
  );

const makeSelectPersisting = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('persisted'),
  );

const makeSelectPersistLoaded = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('persistLoaded'),
  );

const makeSelectNotification = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('notification'),
  );

const makeSelectLocation = () =>
  createSelector(
    selectRoute,
    routeState => routeState.get('location').toJS(),
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectNotification,
  makeSelectLocation,
  makeSelectPersistLoaded,
};
