import React, { useEffect, useState } from "react";

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
    LogoutButton,

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const [date, setData] = useState<DataListProps[]>([]);

    async function loadTransaction() {
        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const transaction =  response ? JSON.parse(response) : [];

        const transactionsFormatted: DataListProps[] = transaction //O item:DataListProps ira devolver as inf formatada para DataListProps[]
        .map((item: DataListProps) => { //item: DataListProps Está dizendo: cada item é um DataListProps
            const amount = Number(item.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })

            const date = Intl.DateTimeFormat('pt-BR',{
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date))

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date,
            }
        });
        setData(transactionsFormatted)        
    }

    useEffect(() => {
        loadTransaction()
    })

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
                    <GestureHandlerRootView >
                        <LogoutButton onPress={() => { }}>
                            <IconOff name={'power'} />
                        </LogoutButton>
                    </GestureHandlerRootView>
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
                    data={date}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />
            </Transactions>
        </Container>
    )
}

