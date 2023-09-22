import React from "react";
import { Amount, BoxCards, CardBackground, Cards, Title } from "./styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

interface Props {
    title: string,
    amount: string,
    color:string
}

export function HistoryCards(
    { title, amount, color }: Props
) {
    return (
        <BoxCards>
            <CardBackground color={color}>
                <Cards>
                    <Title>{title}</Title>
                    <Amount>{amount}</Amount>
                </Cards>
            </CardBackground>
        </BoxCards>
    );
};