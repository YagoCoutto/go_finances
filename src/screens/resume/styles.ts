import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather   } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";



export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 20px;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shappe};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;

export const ChartContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    `;

export const Content = styled.ScrollView`
    padding: 0 24px
    `;

export const MonthSelect = styled.View`
    margin-top: ${RFValue(35)}px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
    `;


export const MonthSelectButton = styled(BorderlessButton)`
`;
export const SelectIcon = styled(Feather)`
    font-size:${RFValue(24)}px;
`;

export const Month = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(24)}px;
`;