import React, { useEffect, useState } from "react";
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from "react-native";

import { useForm } from 'react-hook-form';
import { useNavigation } from "@react-navigation/native";

import { InputForm } from "../../components/Form/inputForm";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Container, Form, Header, Title, Fields, AlignField } from "./styles";
import { CategorySelectButton } from "../../components/Form/categorySelectButton";

import { CategorySelect } from "../CategorySelect";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

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

    const navigation = useNavigation();

    const {
        control, //Para registrar os inputs do nosso formulario.
        handleSubmit, //Função que pega todas as informações do formulario e envia.
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
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

        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.name,
            date: new Date()
        }
        //console.log(data)

        try {
            const data = await AsyncStorage.getItem(dataKey)
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                newTransaction
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
            
            setTransactionType('')
            setCategory({
                key: 'category',
                name: 'Categoria',
            })
            reset()
            navigation.navigate('Listagem' as never);
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao salvar')
        }

    }

    useEffect(() => {
        async function loadData() {
            const data = await AsyncStorage.getItem(dataKey)
            console.log(JSON.parse(data!))
        }
        loadData()

        async function remove() {
            await AsyncStorage.removeItem(dataKey)
        }
        remove()
    }, [])


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