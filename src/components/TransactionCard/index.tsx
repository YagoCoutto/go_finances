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
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps {
    name: string; //salario
    icon: string;
};

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    dateTransaction: string;
};

interface Props {
    data: TransactionCardProps;
};

export function TransactionCard(
    { data }: Props
) {
    return (
        <ViewT>
            <GestureHandlerRootView>
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
            </GestureHandlerRootView>
        </ViewT>
    )
};