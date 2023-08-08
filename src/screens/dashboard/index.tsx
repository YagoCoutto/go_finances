import React from "react";

import {
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    IconOff,
    UserWrapper,
    HighlightCards,
    Transactions,
    TitleSection,
    TransactionList,

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";

export function Dashboard() {
    const data = [
        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'home',
            },
            dateTransaction: '13/04/2020',
        },
        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'home',
            },
            dateTransaction: '13/04/2020',
        },

        {
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'home',
            },
            dateTransaction: '13/04/2020',
        },
    ]

    return (
        <Container >
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Yago</UserName>
                        </User>
                    </UserInfo>
                    <IconOff name={'power'} />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    title='Entradas'
                    amount='R$ 17.400,00'
                    lastTransaction='Última entrada dia 06 de agosto'
                    type="up"
                />

                <HighlightCard
                    title='Saídas'
                    amount='R$ 1.259,00'
                    lastTransaction='Última saída dia 03 de agosto'
                    type="down"
                />
                <HighlightCard
                    title='Total'
                    amount='R$ 16.141,00'
                    lastTransaction='01 à 16 de abril'
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <TitleSection>Listagem</TitleSection>
                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}

