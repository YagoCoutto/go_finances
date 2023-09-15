import React, { useEffect } from "react";
import { Container, Content, Header, Title } from "./styles";
import { HistoryCards } from "../../components/historyCards";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Category } from "../CategorySelect/styles";

interface transactionData {
    type: 'up' | 'down';
    name: string;
    amount: string;
    category: string;
    date: string;
}


export function Resume() {
    async function loadData() {

        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const responseFormatted = response ? JSON.parse(response) : [];

        //filtras as transações de saida
        const expensives = responseFormatted.filter((expensive: transactionData) => expensive.type === 'up')

        const totalByCategory = []
        //percorrer as categorias
        categories.forEach(category => {
            let categorySum = 0;

            //percorrer os valores da category
            expensives.forEach((expensive:transactionData) => {
                if(expensive.category === category.key){
                    categorySum += Number(expensive.amount)
                }
            });
            totalByCategory.push({
                name: category.name,
                total: categorySum
            })
        });
        return totalByCategory //14:36 11
    }
    console.log(loadData())
    useEffect(()=>{
        loadData()
    }, [])
    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <Content>
                {
                    
                    <HistoryCards
                        title=''
                        amount=''
                    />

                }

            </Content>
        </Container>
    )
}
