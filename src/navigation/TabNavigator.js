import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Health from "../screens/Health";
import Business from "../screens/Business";
import Sports from "../screens/Sports";
import Tech from "../screens/Tech";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',

                }}
            />
            <Tab.Screen
                name="Health"
                component={Health}
                options={{
                    tabBarActiveTintColor: '#DA3349',

                }}

            />
            <Tab.Screen
                name="Tech"
                component={Tech}
                options={{
                    tabBarActiveTintColor: '#DA3349',

                }}
            />
            <Tab.Screen
                name="Business"
                component={Business}
                options={{
                    tabBarActiveTintColor: '#DA3349',

                }}
            />
            <Tab.Screen
                name="Sports"
                component={Sports}
                options={{
                    tabBarActiveTintColor: '#DA3349',

                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;