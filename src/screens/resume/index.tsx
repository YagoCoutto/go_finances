import React, { useEffect, useState } from "react";
import { Container, ScrollView, Header, Title } from "./styles";
import { HistoryCards } from "../../components/historyCards";
import { categories } from "../../utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Category } from "../CategorySelect/styles";
import { StyleSheet } from "react-native";

interface transactionData {
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface CategoryData {
    key: string;
    name: string;
    total: string;
    color: string;
    percentFormatted: string;
    percent: number
}

export function Resume() {
    const [totalCategory, setTotalCategory] = useState<CategoryData[]>([])
    async function loadData() {

        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const responseFormatted = response ? JSON.parse(response) : [];

        //filtras as transações de saida
        const expensives = responseFormatted.filter((expensive: transactionData) => expensive.type === 'up')

        const expensiveTotal = expensives.reduce((
            accumulator: number, expensive:transactionData) =>{
                return accumulator + expensive.amount
        }, 0);
        console.log(expensiveTotal)

        const totalByCategory: CategoryData[] = []
        //percorrer as categorias
        categories.forEach(category => {
            let categorySum = 0;

            //percorrer os valores da category
            expensives.forEach((expensive: transactionData) => {
                if (expensive.category === category.key) {
                    categorySum += Number(expensive.amount)
                }
            });
            if (categorySum > 0) {
                const total = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });

                const percent = (categorySum / expensiveTotal * 100)
                const percentFormatted = `${percent.toFixed(0)}`

                totalByCategory.push({
                    name: category.name,
                    color: category.color,
                    total,
                    key: category.key,
                    percent,
                    percentFormatted
                });
            }
        });
        setTotalCategory(totalByCategory)
        console.log(totalByCategory)
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <ScrollView >
                {
                    totalCategory.map(item => (
                        <HistoryCards
                            title={item.name}
                            amount={item.total}
                            color={item.color}
                            key={item.key}
                        />
                    ))
                }

            </ScrollView>
        </Container>
    )
}
