import React, { FC, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet} from 'react-native';

import AppStack from './appstack';
import AuthStack from './authstack';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const MainNav: FC = () => {
    const [user, setUser] = useState<any>(null);
    const auth = getAuth();
const bootstrap= async () => {
    onAuthStateChanged(auth, (_user) => {
        if (_user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(_user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    useEffect(() => {
        bootstrap();
    }, []);
    return (
    <NavigationContainer style={styles.container}>
        {user !== null ?<AppStack/> : <AuthStack/>}
    </NavigationContainer>)
    }
export default MainNav;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
    },
})