import React from "react";
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native'

import { Dashboard } from "../screens/dashboard";
import { Register } from "../screens/register";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text
            }}
        >
            <Tab.Screen
                name="Listagem"
                component={Dashboard}
                options={{ tabBarIcon: (({size, color}) => 
                    <MaterialIcons
                    name="format-list-bulleted"
                    size={size}
                    color={color}
                    />
                )}}
            />
            <Tab.Screen
                name="Cadastro"
                component={Register}
                options={{ tabBarIcon: (({size, color}) => 
                <MaterialIcons
                name="attach-money"
                size={size}
                color={color}
                />
            )}}
            />
            <Tab.Screen
                name="Resumo"
                component={Register}
                options={{ tabBarIcon: (({size, color}) => 
                <MaterialIcons
                name="pie-chart"
                size={size}
                color={color}
                />
            )}}
            />
        </Tab.Navigator>
    );
};