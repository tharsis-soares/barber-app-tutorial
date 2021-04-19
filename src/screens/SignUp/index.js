import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import { UserContext } from '../../contexts/UserContext'

import { 
    InputArea,
    Container,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles'

import SignInput from '../../components/SignInput'

import Api from '../../Api'

import BarberLogo from '../../svg/barber1.svg'
import EmailIcon from '../../svg/email.svg'
import LockIcon from '../../svg/lock.svg'
import PersonIcon from '../../svg/person.svg'

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation()
    const [nameField, setNameField] = useState();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField)
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token)

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                })
                navigation.reset({
                    routes: [{name:'MainTab'}]
                })
            } else {
                alert('Erro: ' + res.error)
            }
        } else {

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
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
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
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>
                    Já possui uma conta?
                </SignMessageButtonText>
                <SignMessageButtonTextBold>
                    Faça login
                </SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}