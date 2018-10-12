import React, { Component } from 'react';
import { FETCH_USER,ADD_USER,UPDATE_USER } from './types';
import { API_URL } from '../resources/property.js';
import axios from 'axios';
const URL = "http://localhost:8088/customer/";

export function fetchAllUsers() {  
  return function(dispatch) {
    return UserApi.getAllUsers().then(users => {
      dispatch(loadUserSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadUserSuccess(users) {  
  return {type: FETCH_USER, users};
}

class UserApi {  
  static getAllUsers() {
    return fetch(URL+'customers',{ method: 'GET'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export const createUser = (user) => {
  return (dispatch) => {
    return axios.post(URL+'create', user)
      .then(response => {
        dispatch(createUserSuccess(response.data))
      }).then(response => {
        dispatch(fetchAllUsers())
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createUserSuccess = (user) => {
  return {type: ADD_USER,user}
};

export const updateUser = (user) => {
  return (dispatch) => {
    return axios.post(URL+'update/'+user.customerId, user)
      .then(response => {
        dispatch(updateUserSuccess(response.data))
      }).then(response => {
        dispatch(fetchAllUsers())
      })
      .catch(error => {
        throw(error);
      });
  };
};

{/*export function updateUser(user) {
  //console.log("Final Data ::::::",JSON.stringify(user));
  return function (dispatch) {
    return axios.put(URL+'update/'+user.customerId, user)
      .then((res) => {
        dispatch({type: UPDATE_USER, user: res.data});
      })
  };
}*/


export const updateUserSuccess = (user) => {
  return {type: UPDATE_USER,user}
};