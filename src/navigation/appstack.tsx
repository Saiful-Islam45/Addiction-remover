import React  from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Home, Dashboard } from "../screens";
const { Navigator, Screen} = createStackNavigator();
const AppStack: React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home} />
            <Screen name="dashboard" component={Dashboard} />
        </Navigator>
    )
};
export default AppStack;