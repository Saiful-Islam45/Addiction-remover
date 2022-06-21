import React, { FC, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Input } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {auth} from '../constants/firebase';

interface UserProps {
    name?: string;
    email?: string;
    password?: string;
}
interface Props {
    navigation: {
        navigate: (key: string) => void;
    };
}

const App: FC<Props> = (props) => {
    const [userInfo, setUserInfo] = useState<UserProps>({})
    const signUpUser = async () => {
        if(userInfo.email && userInfo.password){
            try {
                const user = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
                if(user){
                alert('User Created Successfully');
                }
            } catch (error) {
                alert(error);
            }
        }
    }
    return (
    <View style={styles.container}>
        <Text >Signup</Text>
        <Input placeholder='Name' onChangeText={(_name) => setUserInfo({...userInfo, name: _name})}/>
        <Input placeholder='Email' onChangeText={(_email) => setUserInfo({...userInfo, email: _email} )}/>
        <Input placeholder='Password' secureTextEntry onChangeText={(_password) => setUserInfo({...userInfo, password: _password} )}/>
        <Button title='Sign Up' onPress={signUpUser}/>
        <View style={styles.loginText}>
            <Text style = {{marginHorizontal: 5}}>Already Have an Account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('login')} style = {{marginHorizontal: 5}}>
                <Text style = {{color: 'rgba(81, 135, 200, 1)'}}>Login Here</Text>
            </TouchableOpacity>
        </View>
    </View>)
    }
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20,
    },
})