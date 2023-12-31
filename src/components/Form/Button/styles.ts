import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    width:100%;
    align-items: center;
    justify-content: center;
    
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.secondary};
    
    `;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({theme})=> theme.colors.shappe};
    padding: 18px;

`;