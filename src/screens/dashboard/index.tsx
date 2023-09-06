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

interface HighlightDataProps{
    amount:string
}

interface HighlightData {
    entries: HighlightDataProps
    expensive: HighlightDataProps
    total: HighlightDataProps
}

export function Dashboard() {
    const [transactions, setTransaction] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData)

    async function loadTransaction() {
        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const transaction = response ? JSON.parse(response) : [];

        //variaveis
        let entriesTotal = 0;
        let expensiveTotal = 0;

        const transactionsFormatted: DataListProps[] = transaction //O item:DataListProps ira devolver as inf formatada para DataListProps[]
            .map((item: DataListProps) => { //item: DataListProps Está dizendo: cada item é um DataListProps
                const amount = Number(item.amount).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })

                if (item.type === 'up') {
                    entriesTotal += Number(item.amount)
                } else {
                    expensiveTotal += Number(item.amount)
                }


                const date = Intl.DateTimeFormat('pt-BR', {
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
                    entriesTotal
                }
            });
        setTransaction(transactionsFormatted)
        
        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries:{
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                })
            },
            expensive:{
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                })//1103
            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style:'currency',
                    currency:'BRL'
                })
            }
        })
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
                    amount={highlightData.entries.amount}
                    lastTransaction='Última entrada dia 06 de agosto'
                    type="up"
                />

                <HighlightCard
                    title='Saídas'
                    amount={highlightData.expensive.amount}
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
                    data={transactions}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}

                />
            </Transactions>
        </Container>
    )
}

