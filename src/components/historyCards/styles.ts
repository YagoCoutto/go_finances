import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";

export interface containerColorCard{
    color: string
}

export const BoxCards = styled.View`
    width: 100%;
    flex-direction: row;

`;

export const CardBackground = styled.View<containerColorCard>`
    width: 100%;
    height: ${RFValue(48)}px;
    align-items: flex-end;
    border-radius: 5px;
    background-color: ${({color}) => color};
    margin-bottom: 8px;
    `;

export const Cards = styled.View`
    width: 99%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px 0 24px;
    border-radius: 0px 5px 5px 0px;
    background-color: white;
`;

export const Title = styled.Text``;
export const Amount = styled.Text``;
