import React from "react";
import { Amount, BoxCards, CardBackground, Cards, Title } from "./styles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

interface Props {
    title: string,
    amount: string,
}

export function HistoryCards(
    { title, amount }: Props
) {
    return (

        <BoxCards>
            <CardBackground>
                <Cards>
                    <Title>{title}</Title>
                    <Amount>{amount}</Amount>
                </Cards>
            </CardBackground>
        </BoxCards>
    );
};