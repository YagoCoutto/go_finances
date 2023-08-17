import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";



export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${RFValue(16)}px;

    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.shappe};
`;

export const Title = styled.Text`
    padding: 18px 217px 17px 16px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
`;

export const Icon = styled(Feather)`
    padding-right: 8px;
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;
