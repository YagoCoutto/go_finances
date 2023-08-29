import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";

interface Props extends TouchableOpacityProps {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <GestureHandlerRootView>
            <Container accessibilityRole="button" {...rest}>
                <Title>
                    {title}
                </Title>
            </Container>
        </GestureHandlerRootView>
    )
}