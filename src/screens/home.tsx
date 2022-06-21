import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import React, { FC } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from '../components';
const auth = getAuth();
const App: FC = (props) => {
    const signOutUser = () => {
         signOut(auth);
         props.navigation.navigate('signup');
         alert('Sign Out');
         window.location.reload();
    }
    return (
    <View style={styles.container}>
        <Text >Home</Text>
        <Button title='Sign Out' onPress={signOutUser}/>
    </View>)
    }
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})