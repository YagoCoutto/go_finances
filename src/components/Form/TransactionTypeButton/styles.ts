import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)`
    width: 48%;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    border-radius: 5px;
    border: 1.5px solid ${({ theme }) => theme.colors.text};
    padding: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: ${RFValue(12)}px;

    color: ${({theme, type}) => type === 'up' ? theme.colors.sucess : theme.colors.attention };
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;