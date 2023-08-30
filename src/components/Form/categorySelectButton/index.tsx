import React from "react";
import { Container, Title, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView, NativeViewGestureHandler } from "react-native-gesture-handler";


interface Props extends TouchableOpacityProps {
    title: string;
}

export function CategorySelectButton({ title, ...rest }: Props) {
    return (
        <GestureHandlerRootView>
            <Container {...rest}>
                <Title>{title}</Title>
                <Icon name='chevron-down' />
            </Container>
        </GestureHandlerRootView>
    )
}