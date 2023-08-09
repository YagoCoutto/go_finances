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

interface CategoryProps {
    name: string; //salario
    icon: string;
};

interface Data {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    dateTransaction: string;
};

interface Props {
    data: Data; 
};

export function TransactionCard(
    { data }: Props
) {
    return (
        <Container>
            <Header>
                <Title>{data.title}</Title>
                <Amount type={data.type}>{data.amount}</Amount>
            </Header>
            <Footer>
                <IconTransaction name={data.category.icon}/>
                <TypeTransacition>{data.category.name}</TypeTransacition>
                <DateTransaction>{data.dateTransaction}</DateTransaction>
            </Footer>
        </Container>
    )
};