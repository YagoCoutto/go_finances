import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

interface typeProps {
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<typeProps>`
    background-color: ${({ theme, type }) =>  type === 'total' ? theme.colors.secondary : theme.colors.shappe};
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    padding: 19px 23px;
    margin-right: 16px;
    padding-bottom: ${RFValue(42)}px;
    border-radius: 8px;

`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

`;

export const Title = styled.Text<typeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shappe : theme.colors.title};

`;

export const Icon = styled(Feather)<typeProps>`
    font-size: ${RFValue(40)}px;

    ${(type) => type.type === 'up' && css`
        color: ${({ theme }) => theme.colors.sucess};
    `}

    ${(type) => type.type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}

    ${(type) => type.type === 'total' && css`
        background-color: ${({theme}) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.shappe};
    `}
`;

export const Footer = styled.View`
    `;

export const Amount = styled.Text<typeProps>`
    margin-top: ${RFValue(35)}px;
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shappe : theme.colors.title};

`;

export const LastTransaction = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shappe : theme.colors.title};
`;