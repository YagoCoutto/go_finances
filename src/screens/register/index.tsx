import React from "react";
import { Container, Form, Header, Title, Fields,AlignField } from "./styles";
import { Input } from "../../components/Form/input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";


export function Register() {
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
                            type="up"
                            title="Income" />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome" />
                    </AlignField>
                </Fields>

                <Button title="Enviar" />
            </Form>



        </Container>
    )
}