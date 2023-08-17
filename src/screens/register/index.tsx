import React from "react";
import { Container, Form, Header, Title, Fields, AlignField } from "./styles";
import { Input } from "../../components/Form/input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { useState } from "react";
import { CategorySelectButton } from "../../components/Form/categorySelectButton";
import { Modal } from "react-native";
import { CategorySelect } from "../CategorySelect";


export function Register() {
    const [transactionType, setTransactionType] = useState(''); //altera o fundo do button income/outcome
    const [ModalCategorySelect, setModalCategorySelect] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
        console.log(transactionType)
    }

    function handleOpenSelectCategory() {
        setModalCategorySelect(true)
    }

    function handleCloseSelectCategory() {
        setModalCategorySelect(false)
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
                        placeholderTextColor={'#969CB2'}
                    />
                    <Input
                        placeholder="Preço"
                        keyboardType="numeric"
                        placeholderTextColor={'#969CB2'}
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

                    <CategorySelectButton 
                    title="Categoria" 
                    onPress={handleOpenSelectCategory}
                    />
                </Fields>

                <Button
                    title="Enviar"
                />
            </Form>
            <Modal visible={ModalCategorySelect}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategory}
                />
            </Modal>


        </Container>
    )
}