import React, { useContext } from "react"; //Utilizar o hook para criar o contexto
import {
    Container,
    Header,
    SigInTitle,
    Title,
    WrapperLogo,
    Footer,
    FooterWrapper
} from "./styles";
import LogoSvg from "../../assets/Logo.svg"
import GoogleSvg from "../../assets/google-icon 1.svg"
import AppleSvg from "../../assets/apple.svg"

import { RFValue } from "react-native-responsive-fontsize";
import { ButtonSocial } from "../../components/SignInSocialButton";

import {AuthContext} from '../../AuthContext'
//import { useAuth } from "../../hooks/auth";
import { Alert } from "react-native";

export function SignIn() {
    const data = useContext(AuthContext)//Passo o authContext para o hook saber qual o contexto quero acessar
   //const {user, signInWithGoogle} = useAuth()

    async function handleSignInWithGoogle(){
        try{
            //await signInWithGoogle()
        }catch (error){
            console.log(error);
            Alert.alert('Não foi possivel conectar a conta Google')
        }

    }

    return (
        <Container>
            <Header>
                <WrapperLogo>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </WrapperLogo>
                <SigInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SigInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <ButtonSocial
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                </FooterWrapper>
                <FooterWrapper>
                    <ButtonSocial
                        title="Entrar com Apple"
                        svg={AppleSvg}
                    />
                </FooterWrapper>
            </Footer>

        </Container>
    )
}