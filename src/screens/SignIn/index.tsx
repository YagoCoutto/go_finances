import React from "react";
import {
    Container,
    Header,
    SigInTitle,
    Title,
    WrapperLogo,
    Footer,
    SignInButton,
    FooterWrapper
} from "./styles";
import LogoSvg from "../../assets/Logo.svg"
import GoogleSvg from "../../assets/google-icon 1.svg"
import { RFValue } from "react-native-responsive-fontsize";
import { ButtonSocial } from "../../components/SignInSocialButton";

export function SignIn() {
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
                        title="Entrar" 
                        svg={GoogleSvg}    
                    />
                </FooterWrapper>
            </Footer>

        </Container>
    )
}