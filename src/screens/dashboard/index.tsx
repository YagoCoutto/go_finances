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
    HighlightCards

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";

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

        </Container>
    )
}

