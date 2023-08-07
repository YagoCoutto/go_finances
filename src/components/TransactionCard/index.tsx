import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    DateTransaction,
    IconTransaction,
    TypeTransacition
} from "./styles";

/*interface CategoryProps {
    name: string; //salario
    icon: string;
}*/

interface Props {
    title: string;
    amount: string;
    dateTransaction: string;
    //category: CategoryProps;
    type: 'exit' | 'enter';
    typeIcon: 'entryValue' | 'food' | 'home'
}

const icon = {
    entryValue: 'dollar-sign',
    food: 'coffee',
    home: 'home'
}

export function TransactionCard(
    {   type,
        title,
        amount,
        dateTransaction,
        typeIcon,
       // category,
        
    }: Props
) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Amount type={type}>{amount}</Amount>
            </Header>
            <Footer>
                <IconTransaction name={icon[typeIcon]} type={typeIcon}/>
                <TypeTransacition>Vendas</TypeTransacition>
                <DateTransaction>{dateTransaction}</DateTransaction>
            </Footer>
        </Container>
    )
};