import React, { useEffect, useState } from "react";
import { Container, Header, Title, ChartContainer, Content, MonthSelect, MonthSelectButton, SelectIcon, Month } from "./styles";
import { HistoryCards } from "../../components/historyCards";
import { categories } from "../../utils/categories";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { addMonths, subMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";




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
    total: number;
    totalFormatted: string;
    color: string;
    percentFormatted: string;
    percent: number
}

export function Resume() {
    const [selectDate, setSelectDate] = useState(new Date())
    const [totalCategory, setTotalCategory] = useState<CategoryData[]>([])
   
    async function loadData() {

        const dataKey = '@gofinances:transactions'
        const response = await AsyncStorage.getItem(dataKey)
        const responseFormatted = response ? JSON.parse(response) : [];

        //filtras as transações de saida
        const expensives = responseFormatted.filter((expensive: transactionData) => expensive.type === 'up')

        const expensiveTotal = expensives.reduce((
            accumulator: number, expensive: transactionData) => {
            return accumulator + Number(expensive.amount);
        }, 0);
        console.log(expensiveTotal);

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
                const totalFormatted = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });

                const percent = (categorySum / expensiveTotal * 100)
                const percentFormatted = `${percent.toFixed(0)}%`

                totalByCategory.push({
                    name: category.name,
                    color: category.color,
                    total: categorySum,
                    totalFormatted,
                    key: category.key,
                    percent,
                    percentFormatted
                });
            }
        });
        setTotalCategory(totalByCategory)
        console.log(totalByCategory)
    }

    function HandlerDate(action: 'next'|'prev'){
        if (action === 'next'){
            setSelectDate(addMonths(selectDate, 1))
        }else{
            setSelectDate(subMonths(selectDate, 1))
        }
    }


    useEffect(() => {
        loadData()
    }, [])
    return (
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>

            <Content
                showHorizontalScrollIndicator={false}
            >

                <MonthSelect>
                    <GestureHandlerRootView >
                        <MonthSelectButton onPress={() => HandlerDate('prev')}>
                            <SelectIcon name='chevron-left' />
                        </MonthSelectButton>
                    </GestureHandlerRootView>

                    <Month>
                        {format(selectDate, 'MMMM,yyyy', {locale:ptBR})/*8:29 15*/} 
                    </Month>
                    <GestureHandlerRootView>

                        <MonthSelectButton onPress={() => HandlerDate('next')}>
                            <SelectIcon name='chevron-right' />
                        </MonthSelectButton>
                    </GestureHandlerRootView>
                </MonthSelect>

                <ChartContainer>

                    <VictoryPie
                        data={totalCategory}
                        x={"percentFormatted"}
                        y={"total"}
                        colorScale={totalCategory.map(item => item.color)}

                        style={{
                            labels: {
                                fontSize: RFValue(18),
                                fontWeight: 'bold',
                                fill: theme.colors.shappe
                            }
                        }}
                        labelRadius={70}
                    />
                </ChartContainer>
                {
                    totalCategory.map(item => (
                        <HistoryCards
                            title={item.name}
                            amount={item.totalFormatted}
                            color={item.color}
                            key={item.key}
                        />
                    ))
                }

            </Content>
        </Container>
    )
}
