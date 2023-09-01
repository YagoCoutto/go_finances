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
import { categories } from "../../utils/categories";


export interface TransactionCardProps {
    type: 'positive' | 'negative';
    name: string;
    amount: string;
    category: string;
    date: string;
};

interface Props {
    data: TransactionCardProps;
};

export function TransactionCard(
    { data }: Props
    ) {
    const category = categories.filter(
        item => item.key === data.category
    );
    return (
        <ViewT>
            <GestureHandlerRootView>
                <Container>
                    <Header>
                        <Title>{data.name}</Title>
                        <Amount type={data.type}>
                            {data.type === 'negative' ? '- ' : ''}
                            {data.amount}
                        </Amount>
                    </Header>
                    <Footer>
                        <IconTransaction name={data.category} />
                        <TypeTransacition>{category.}</TypeTransacition>
                        <DateTransaction>{data.date}</DateTransaction>
                    </Footer>
                </Container>
            </GestureHandlerRootView>
        </ViewT>
    )
};