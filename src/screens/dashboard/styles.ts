import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 56px;
    margin-left: 24px;
    margin-right: 24px;

`;

export const Photo = styled.Image`
    background-color: ${({ theme }) => theme.colors.shappe};
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shappe};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.shappe};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Off = styled.View`

`;