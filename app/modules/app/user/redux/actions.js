import * as CONSTANTS from './constants';

export function userListRequest() {
  return {
    type: CONSTANTS.USER_LIST_REQUEST,
  };
}

export function userListSuccess(data) {
  return {
    type: CONSTANTS.USER_LIST_SUCCESS,
    data,
  };
}

export function userListError(data) {
  return {
    type: CONSTANTS.USER_LIST_ERROR,
    data,
  };
}

export function userLoadRequest(id) {
  return {
    type: CONSTANTS.USER_LOAD_REQUEST,
    id,
  };
}

export function userLoadSuccess(data) {
  return {
    type: CONSTANTS.USER_LOAD_SUCCESS,
    data,
  };
}

export function userLoadError(data) {
  return {
    type: CONSTANTS.USER_LOAD_ERROR,
    data,
  };
}

export function userDeleteRequest(id) {
  return {
    type: CONSTANTS.USER_DELETE_REQUEST,
    id,
  };
}

export function userDeleteSuccess(id, data) {
  return {
    type: CONSTANTS.USER_DELETE_SUCCESS,
    id,
    data,
  };
}

export function userDeleteError(data) {
  return {
    type: CONSTANTS.USER_DELETE_ERROR,
    ...data,
  };
}

export function userSaveRequest(data) {
  return {
    type: CONSTANTS.USER_SAVE_REQUEST,
    data,
  };
}

export function userSaveSuccess(data) {
  return {
    type: CONSTANTS.USER_SAVE_SUCCESS,
    data,
  };
}

export function userSaveError(data) {
  return {
    type: CONSTANTS.USER_SAVE_ERROR,
    data,
  };
}

export function loadNewUser() {
  return {
    type: CONSTANTS.LOAD_NEW_USER,
  };
}

export function updateUserField(field, value) {
  return {
    type: CONSTANTS.UPDATE_USER_FIELD,
    field,
    value,
  };
}

export function profileSaveRequest(data) {
  return {
    type: CONSTANTS.SAVE_PROFILE_REQUEST,
    data,
  };
}

export function profileSaveSuccess(data) {
  return {
    type: CONSTANTS.SAVE_PROFILE_SUCCESS,
    data,
  };
}

export function profileSaveError(data) {
  return {
    type: CONSTANTS.SAVE_PROFILE_ERROR,
    data,
  };
}

export function memberUpgradeRequest(data) {
  return {
    type: CONSTANTS.UPGRADE_MEMBER_REQUEST,
    data,
  };
}

export function memberUpgradeSuccess(data) {
  return {
    type: CONSTANTS.UPGRADE_MEMBER_SUCCESS,
    data,
  };
}

export function memberUpgradeError(data) {
  return {
    type: CONSTANTS.UPGRADE_MEMBER_ERROR,
    data,
  };
}
