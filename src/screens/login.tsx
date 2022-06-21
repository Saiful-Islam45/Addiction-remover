import React, { FC, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, Input } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
    return (
    <View style={styles.container}>
        <Text >Login</Text>
        <Input placeholder='Email' onChangeText={(_email) => setUserInfo({...userInfo, email: _email} )}/>
        <Input placeholder='Password' secureTextEntry onChangeText={(_password) => setUserInfo({...userInfo, password: _password} )}/>
        <Button title='Login' onPress={()=>console.log('clicked')}/>
        <View style={styles.signText}>
            <Text style = {{marginHorizontal: 5}}>Don't Have Any Account? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style = {{marginHorizontal: 5}}>
                <Text style = {{color: 'rgba(81, 135, 200, 1)'}}>Sign Up Here</Text>
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
    signText: {
        flexDirection: 'row',
        marginVertical: 20,
    },
})