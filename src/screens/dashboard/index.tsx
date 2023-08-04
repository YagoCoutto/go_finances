import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Off,

} from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserInfo>
                    <Photo source={{uri: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'}}/>
                    <User>
                        <UserGreeting>Ola,</UserGreeting>
                        <UserName>Yago</UserName>
                    </User>
                    <Off/>
                </UserInfo>
            </Header>
        </Container>
    )
}

