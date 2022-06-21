import React, { FC } from 'react';
import {View, Text, StyleSheet} from 'react-native';
const App: FC = () => {
    return (
    <View style={styles.container}>
        <Text >Dashboard</Text>
    </View>)
    }
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
    },
})