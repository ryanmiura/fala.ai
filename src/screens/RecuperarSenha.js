import { View,Text, TextInput, TouchableOpacity, TextComponent,StyleSheet } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth_mod } from "../firebase/config";

const RecuperarSenha = (props) => {

    const[email, setEmail] = useState('')

    const voltar = () => {
        props.navigation.goBack()
    }

    const recuperar = () => {
        
        sendPasswordResetEmail(auth_mod, email)
        .then((CredencialEmail) => {
            console.log("Email de Rec enviado com sucesso: " + JSON.stringify(CredencialEmail))
            voltar()
        })
        .catch((error) => {
            console.log("Falha ao enviar email de recuperacao : " + JSON.stringify(error))
        })
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto}>E-mail</Text>
                <TextInput style={estilos.textoInput} onChangeText={setEmail}></TextInput>
                <Text style={estilos.textoErro}>E-mail parece ser invalido</Text>
            </View>
                
            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao} onPress={recuperar}>
                    <Text style={estilos.texto}>RECUPERAR</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#372775',
        flex:1,
        alignItems:'center'
    },
    viewForms:{
        flex:0.7,
        justifyContent:'center'
    },
    viewBotao:{
        flex:0.3,
    },
    texto:{
        fontSize:18,
        color:'#FFF',
        paddingTop:10,
        fontFamily: 'AveriaLibre-Regular',
    },
    textoErro:{
        fontSize:14,
        color:'#FD7979',
        paddingTop:5,
        fontFamily: 'AveriaLibre-Regular',
    },
    textoInput:{
        backgroundColor:'#FFF',
        width:653,
        height:40,
    },
    botao:{
        backgroundColor:'#49B976',
        width:653,
        height:40,
        alignItems:'center',
        //justifyContent:'center',
    }
})

export default RecuperarSenha