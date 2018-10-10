import React, { Component } from 'react';
import { FETCH_USER } from './types';
import { API_URL } from '../resources/property.js';
import axios from 'axios';

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
     const URL = "http://localhost:8088/customer/customers";
    return fetch(URL,{ method: 'GET'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}