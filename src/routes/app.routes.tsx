import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from "../screens/dashboard";
import { Register } from "../screens/register";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="Listagem"
                component={Dashboard}
            />
            <Screen
                name="Cadastro"
                component={Register}
            />
        </Navigator>
    );
}