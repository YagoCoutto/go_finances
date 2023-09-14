import React from "react";
import { Amount, BoxCards, Cards, Title } from "./styles";

interface Props {
    title: string,
    amount: string,
}

export function HistoryCards(
    {title, amount}:Props
){
    return(
        <BoxCards>
            <Cards>
                <Title>{title}</Title>
                <Amount>{amount}</Amount>
            </Cards>
        </BoxCards>
    );
};