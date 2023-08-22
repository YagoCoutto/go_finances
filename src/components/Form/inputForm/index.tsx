import React from "react";
import { Container } from "./styles";
import { Input } from "../input";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";


interface Props extends TextInputProps {
    control: Control; //Para controlar o input.
    name: string; //Para ele conseguir diferenciar um input do outro.
}

export function InputForm({
    control,
    name,
    ...rest // pegar o resto das propriedades possiveis.
}: Props) {
    return (
        <Container>
            <Controller 
            control={control}
            render={({ field: {onChange, value}}) => (
                <Input
                onChangeText={onChange}
                value={value}
                    {...rest}
                />
            )} 
            //ira pegar algumas propriedades do input abaixo. 
            /*OnChange: Vai pegar quando muda o conteudo do input.
            *OnBlur: Quando clica no input.
            *value: pega o proprio valor do input.
            */
           name={name}
            />
        </Container>
    );
}