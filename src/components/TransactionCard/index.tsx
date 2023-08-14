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
    TypeTransacition,
    ViewT
} from "./styles";
import { View } from "react-native";

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
        <ViewT>

            <Container>
                <Header>
                    <Title>{data.title}</Title>
                    <Amount type={data.type}>
                        {data.type === 'negative' ? '- ' : ''}
                        {data.amount}
                    </Amount>
                </Header>
                <Footer>
                    <IconTransaction name={data.category.icon} />
                    <TypeTransacition>{data.category.name}</TypeTransacition>
                    <DateTransaction>{data.dateTransaction}</DateTransaction>
                </Footer>
            </Container>
        </ViewT>
    )
};