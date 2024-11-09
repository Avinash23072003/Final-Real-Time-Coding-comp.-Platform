import { atom } from 'recoil';

// Creating a simple atom to track user login status
export const loggedInAtom = atom({
  key: 'loggedInAtom', // unique ID (with respect to other atoms/selectors)
  default: false,    // default value (initial state)
});