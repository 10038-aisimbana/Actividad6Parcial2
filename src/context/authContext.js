import React from 'react';
import {auth} from '../firebase.config';
import { createContext, useContext } from 'react';

export const auth = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log('useAuth must be used within an AuthProvider');
    }
    return context;
};

export function AuthProvider({children}) {
  return <authContext.Provider>{children}</authContext.Provider>;
}