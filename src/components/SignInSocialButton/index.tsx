import React from "react";
import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from 'react-native-svg'
import { Button, ImageContainer, Text } from "./styled";

interface Props extends RectButtonProps {
    title: string,
    svg: React.FC<SvgProps>
}



export function ButtonSocial({
    title,
    svg: Svg,
    ...rest
}: Props) {
    return (
        <GestureHandlerRootView>
            <Button {...rest}>
                <ImageContainer>
                    <Svg />
                </ImageContainer>
                <Text>{title}</Text>
            </Button>
        </GestureHandlerRootView>
    )
}