import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";


interface typeProps {
    type: 'positive' | 'negative';
}

export const ViewT = styled.View`
    width: 100%;
`;

export const Container = styled.View<typeProps>`
    background-color: ${({ theme }) => theme.colors.shappe};
    width: 100%;
    height: ${RFValue(128)}px;
    border-radius: 8px;
    margin-bottom: 16px;

`;

export const Header = styled.View`
    width: 100%;
    flex-direction: column;
    padding: 17px 0 0 24px ;
`;

export const Title = styled.Text<typeProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};

    `;
export const Amount = styled.Text<typeProps>`
        font-size: ${RFValue(20)}px;
        font-family: ${({ theme }) => theme.fonts.regular};
        color: ${({ theme, type }) => type === 'positive' ? theme.colors.sucess : theme.colors.attention};
    
    `;

export const Footer = styled.View`
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px 24px 18px 24px ;
    `;

export const Icon = styled(Feather) <typeProps>`
    font-size: ${RFValue(40)}px;

    ${(type) => type.type === 'up' && css`
        color: ${({ theme }) => theme.colors.sucess};
    `}

    ${(type) => type.type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}

    ${(type) => type.type === 'total' && css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.shappe};
    `}
`;

export const IconTransaction = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};

`;

export const TypeTransacition = styled.Text`
    position: absolute;
    padding-left: ${RFValue(56)}px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};

    
`;

export const DateTransaction = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`;
