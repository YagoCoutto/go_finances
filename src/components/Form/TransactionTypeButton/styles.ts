import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { css } from "styled-components";

interface IconsProps {
    type: 'up' | 'down'
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    width: 48%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    padding: ${RFValue(16)}px;

    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.sucess_light};
        border: none;
    ` }

    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
        border: none;
    ` }
`;

export const Icon = styled(Feather) <IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: ${RFValue(12)}px;

    color: ${({ theme, type }) => type === 'up' ? theme.colors.sucess : theme.colors.attention};
`;

export const Title = styled.Text`
    color:${({theme}) => theme.colors.title} ;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;