import React from "react";
import { Container, Form, Header, Title, Fields, AlignField } from "./styles";
import { Input } from "../../components/Form/input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { useState } from "react";
import { CategorySelectButton } from "../../components/Form/categorySelectButton";
import { Modal } from "react-native";
import { CategorySelect } from "../CategorySelect";

import { InputForm } from "../../components/Form/inputForm";
import { useForm } from 'react-hook-form';

interface formDate {
    name: string;
    amount: string;
}


export function Register() {
    const [transactionType, setTransactionType] = useState(''); //altera o fundo do button income/outcome
    const [ModalCategorySelect, setModalCategorySelect] = useState(false)
    // const [name, setName] = useState('') Não será mais utilizado por conta do react hooks form
    // const [amount, setAmount] = useState('') Não será mais utilizado por conta do react hooks form

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control, //Para registrar os inputs do nosso formulario.
        handleSubmit, //Função que pega todas as informações do formulario e envia.
    } = useForm()

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

    function handleRegister(form: formDate) {
        const data = {
             name: form.name,
          amount: form.amount,
            transactionType,
            category: category.name
        }

        console.log(data)
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
                    <InputForm
                        name="name" //Precisa passar o name para hooks.
                        control={control} //Assinatura para saber quais inputs fazem parte do mesmo grupo.
                        placeholder="Nome"
                        placeholderTextColor={'#969CB2'}
                    // onChangeText={text => setName(text)} Não será mais utilizado por conta do react hooks form.
                    />
                    <InputForm
                        name='amount' //Precisa passar o name para hooks.
                        control={control} //Assinatura para saber quais inputs fazem parte do mesmo grupo.
                        placeholder="Preço"
                       // keyboardType="numeric"
                        placeholderTextColor={'#969CB2'}
                    // onChangeText={text => setAmount(text)} Não será mais utilizado por conta do react hooks form.
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
                        title={category.name}
                        onPress={handleOpenSelectCategory}
                    />
                </Fields>

                <Button
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}//envolver o handleSubmit para enviar as inf.
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