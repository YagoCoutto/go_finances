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

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

export function Dashboard() {
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
            <TitleSection>Listagem</TitleSection>
            <Transactions>
                <TransactionCard
                    title='Desenvolvimento de site'
                    amount='R$ 12.000,00'
                    dateTransaction='13/04/2020'
                    type="enter"
                    typeIcon="entryValue"
                />
                <TransactionCard
                    title='Hamburgueria Pizzy'
                    amount='- R$ 59,00'
                    dateTransaction='10/04/2020'
                    type="exit"
                    typeIcon="food"

                />
                <TransactionCard
                    title='Aluguel do apartamento'
                    amount='- R$ 770,00'
                    dateTransaction='08/04/2020'
                    type="exit"
                    typeIcon="home"

                />
            </Transactions>
        </Container>
    )
}

