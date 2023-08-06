import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
} from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

//Criar um objeto para auxiliar na escolha do icone
//name={icon[type]} a partir do icon acessar o type.
const icon = {
    up:'arrow-up-circle',
    down:'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard(
    {
        type,
        title,
        amount,
        lastTransaction,
    }: Props
) {
    return (
        <Container type={type}>
            <Header>
                <Title>{title}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Footer>
                <Amount>{amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
};
