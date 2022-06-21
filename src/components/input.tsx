import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    value?: string;
    secureTextEntry?: boolean;
}
const {height, width} = Dimensions.get('window');
export const Input: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                secureTextEntry={props.secureTextEntry || false}
            />
        </View>
    );
};
export default Input;
const styles = StyleSheet.create({
    container: {
        width: width /1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 25,
        marginVertical: 10,
    },
    input: {
        padding: 15,
    }
});