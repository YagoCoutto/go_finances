import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Foundation} from '@expo/vector-icons'


export const Container = styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
    width: 100%;
    margin-top: 56px;
    padding: 0 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
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
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.shappe};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.shappe};
    font-family: ${({theme}) => theme.fonts.bold};
    margin-top: -5px;
`;

export const IconOff = styled(Foundation)`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.secondary};
`;

export const HighlightCards = styled.ScrollView.attrs({ //Utilizar attrs para acessar os objetos da scrollView
    horizontal: true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{paddingHorizontal:24}
})`
    width:100%;
    position: absolute;
    margin-top: ${RFValue(130)}px;
`;

export const TitleSection = styled.Text`
    width: 100%;
    margin-top: ${RFPercentage(12)}px;
    margin-bottom: ${RFValue(16)}px;
    padding-left: 24px;

    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Transactions = styled.ScrollView.attrs({
    horizontal: false,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{paddingHorizontal:24}
    
})`

`;