import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
    title: string;
    onPress: () => void;
}
const {height, width} = Dimensions.get('window');
export const Button: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.button}>{props.title}</Text> 
            </TouchableOpacity>
               
        </View>
    );
};
export default Button;
const styles = StyleSheet.create({
    container: {
        // width: width / 2,
        alignSelf: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    button: {
        color: '#fff',
        fontSize: 20,
    }
});