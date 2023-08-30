import React, { useEffect, useState } from "react";
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from "react-native";

import { InputForm } from "../../components/Form/inputForm";
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Form, Header, Title, Fields, AlignField } from "./styles";
import { CategorySelectButton } from "../../components/Form/categorySelectButton";

import { CategorySelect } from "../CategorySelect";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface formDate {
    name: string;
    amount: string;
}

const dataKey = '@gofinances:transactions'

const schema = Yup.object()
    .shape({
        name: Yup
            .string()
            .required('Nome é obrigatório'),
        amount: Yup
            .number()
            .typeError('Informe um valor numerico')
            .positive('O valor não pode ser negativo'),
    })


export function Register() {
    const [transactionType, setTransactionType] = useState(''); //altera o fundo do button income/outcome
    const [ModalCategorySelect, setModalCategorySelect] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })

    const {
        control, //Para registrar os inputs do nosso formulario.
        handleSubmit, //Função que pega todas as informações do formulario e envia.
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
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

    async function handleRegister(form: formDate) {
        if (!transactionType) { // ! exclamação para saber se não tem nada dentro de transactionType.
            return Alert.alert('Selecione o tipo da transação');
        }

        if (category.key === 'category') {
            console.log(category.key)
            return Alert.alert('Selecione uma categoria');
        }

        /* if(!form.name){
             return Alert.alert('Informe um nome');
         }
 
         if(!form.amount){
             return Alert.alert('Informe o valor');
         }*/

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.name

        }

        //console.log(data)

        const store = async () => {
            try {
                const jsonValue = JSON.stringify(data);
                await AsyncStorage.setItem(dataKey, jsonValue);
            } catch (error) {
                console.log(error)
                Alert.alert('Erro ao salvar')
            }
        }
        store()
        
        useEffect(()=>{
            async function loadData(){
                const jsonData = await AsyncStorage.getItem(dataKey)
                console.log(JSON.parse(jsonData!))
            }
            loadData()
        }, [])

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{/*onPress={Keyboard.dismiss}: para o teclado fechar quando clicar em qualquer canto da tela.*/}

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
                            autoCapitalize="sentences" //para deixar a primeira letra maiuscula.
                            autoCorrect={false}
                            placeholderTextColor={'#969CB2'}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            name='amount' //Precisa passar o name para hooks.
                            control={control} //Assinatura para saber quais inputs fazem parte do mesmo grupo.
                            placeholder="Preço"
                            keyboardType="numeric"
                            placeholderTextColor={'#969CB2'}
                            error={errors.amount && errors.amount.message}
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

            </Container >
        </TouchableWithoutFeedback>
    )
}