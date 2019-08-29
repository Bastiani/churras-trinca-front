
import { LOCAL_STORAGE } from './consts';

export async function getToken() {
  return localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
}

export async function isLoggedIn() {
  return !!getToken();
}

export function setToken(token) {
  localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
}

export async function removeToken() {
  localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
}

export function logout() {
  Object.keys(LOCAL_STORAGE).map((key) => localStorage.removeItem(LOCAL_STORAGE[key]));
}
