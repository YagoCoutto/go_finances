import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 70%;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const WrapperLogo = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 45px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size:${RFValue(30)}px;
    color: ${({ theme }) => theme.colors.shappe};
    text-align: center;
`;


export const SigInTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.shappe};
    text-align: center;
    
    margin-top: 45px;
    margin-bottom: 80px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    justify-content: flex-end;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SignInButton = styled.View``;

export const FooterWrapper = styled.View``;
