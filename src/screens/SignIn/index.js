import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    InputArea,
    Container,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import Api from '../../Api'

import SignInput from '../../components/SignInput'

import BarberLogo from '../../svg/barber1.svg'
import EmailIcon from '../../svg/email.svg'
import LockIcon from '../../svg/lock.svg'

export default () => {
    
    const navigation = useNavigation()
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField)
            if(json.token) {
                alert('Deu certo!')
            } else {
                alert('Email e/ou senha errados!')
            }

        } else {
            alert('Preencha os campos!')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    
    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                    
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>
                    Ainda não possui conta
                </SignMessageButtonText>
                <SignMessageButtonTextBold>
                    Cadastre-se
                </SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}