import React from "react";
import { Container, Header, Title } from "./styles";
import { HistoryCards } from "../../components/historyCards";



export function Resume(){
    return(
        <Container>
            <Header>
                <Title>Resumo por categoria</Title>
            </Header>
            <HistoryCards 
            title="Casa"
            amount="R$1.200"
            />
        </Container>
    )
}
