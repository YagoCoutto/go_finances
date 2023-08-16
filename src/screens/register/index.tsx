import React from "react";
import { Container, Form, Header, Title, Fields, AlignField } from "./styles";
import { Input } from "../../components/Form/input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { useState } from "react";
import { CategorySelect } from "../../components/Form/categorySelect";


export function Register() {
    const [transactionType, setTransactionType] = useState(''); //altera o fundo do button income/outcome

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
        console.log(transactionType)
    }

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                    />
                    <Input
                        placeholder="Preço"
                        keyboardType="numeric"
                    />
                    <AlignField>
                        <TransactionTypeButton
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'} //se transactionType for igual a up retornara True.
                            type="up"
                            title="Income" />
                        <TransactionTypeButton
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'} //se transactionType for igual a down retornara True.
                            type="down"
                            title="Outcome" />
                    </AlignField>
                    
                    <CategorySelect title="Categoria" />
                </Fields>

                <Button title="Enviar" />
            </Form>



        </Container>
    )
}