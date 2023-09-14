import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

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
    LoadingContainer,

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import theme from "../../global/styles/theme";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

interface HighlightDataProps {
    amount: string,
    lastTransactionsDate: string
}

interface HighlightData {
    entries: HighlightDataProps
    expensive: HighlightDataProps
    total: HighlightDataProps
}

export function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
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
                    entriesTotal,

                }
            });
        setTransaction(transactionsFormatted)

        function lastTransactionsDate(
            collection: DataListProps[],
            type: 'up' | 'down' | 'total'
        ) {

            const lastDate = new Date(collection
                .filter(transaction => transaction.type === type)
                .map(transaction => transaction.date).at(-1));

            const getDate = lastDate.getDate()
            const getMonth = lastDate.toLocaleDateString('pt-BR', { month: 'long' })

            return `${getDate} de ${getMonth}`

        }


        const lastTransactionsEntries = lastTransactionsDate(transaction, 'up')
        const lastTransactionsExpensives = lastTransactionsDate(transaction, 'down')
        const totalTransactions = lastTransactionsDate(transaction, 'down')



        const total = entriesTotal - expensiveTotal;

        setHighlightData({
            entries: {
                amount: entriesTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactionsDate: `Última entrada dia ${lastTransactionsEntries}`
            },
            expensive: {
                amount: expensiveTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactionsDate: `Última saída dia ${lastTransactionsExpensives}`

            },
            total: {
                amount: total.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransactionsDate: `01 à ${totalTransactions}`

            }
        });
        setIsLoading(false)
    }

    useEffect(() => {
        loadTransaction()
    }, [])

    useFocusEffect(useCallback(() => {
        loadTransaction();
    }, []))

    return (
        <Container >
            {
                isLoading ?
                    <LoadingContainer>
                        <ActivityIndicator size={"large"} color={theme.colors.primary} />
                    </LoadingContainer> : //se estiver carregando mostra activ se não o bloco abaixo 05:09 08
                    <>
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
                                lastTransaction={highlightData.entries.lastTransactionsDate}//09 16:23
                                type="up"
                            />

                            <HighlightCard
                                title='Saídas'
                                amount={highlightData.expensive.amount}
                                lastTransaction={highlightData.expensive.lastTransactionsDate}
                                type="down"
                            />
                            <HighlightCard
                                title='Total'
                                amount={highlightData.total.amount}
                                lastTransaction={highlightData.total.lastTransactionsDate}
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
                    </>
            }
        </Container>
    )
}

