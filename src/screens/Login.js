import { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth_mod } from "../firebase/config";
import { useDispatch } from "react-redux";
import { reducerSetLogin } from "../../redux/loginSlice";

const Login = (props) => {

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const dispatch = useDispatch()

    const autenticar = () => {



        signInWithEmailAndPassword(auth_mod, email, senha)
        .then((CredencialUsuario)=>{
            console.log("ID DO USUARIO : " + JSON.stringify(CredencialUsuario.user.uid))
            console.log("Usuario Auntenticado com sucesso : " + JSON.stringify(CredencialUsuario))
            dispatch(reducerSetLogin({email: email, senha: senha, uid: CredencialUsuario.user.uid}))
            //goToHome()
            goToDrawer()
        })
        .catch((error)=>{
            console.log("Erro ao autenticar usuario : " + JSON.stringify(error))
        })
    }

    const goToHome = () =>{
        props.navigation.navigate('Home')
    }
    const goToDrawer = () =>{
        props.navigation.navigate('Drawer')
    }
    const goToNovaConta = () =>{
        props.navigation.navigate('NovaConta')
    }
    const goToRecuperarSenha = () =>{
        props.navigation.navigate('RecuperarSenha')
    }
    return (
        <View style={estilos.view} >
            <View style={estilos.viewCabecalho}>
                <Text style={estilos.textoLogo} >Satisfying.you</Text>
                <Icon name="mood" size={50} color="#FFF"/>
            </View>

            <View style={estilos.viewForms}>
                <Text style={estilos.texto} >E-mail</Text>
                <TextInput style={estilos.textInput} onChangeText={setEmail} ></TextInput>


                <Text style={estilos.texto}>Senha</Text>
                <TextInput style={estilos.textInput} onChangeText={setSenha} ></TextInput>
                <Text style={estilos.textoErro}>E-mail e/ou senha invalidos.</Text>

                <TouchableOpacity style={estilos.botao1} onPress={autenticar}>
                    <Text style={estilos.textBotao} >Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilos.viewBotoes}>
                <TouchableOpacity style={estilos.botao2} onPress={goToNovaConta}>
                    <Text style={estilos.textBotaos} >Criar minha conta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao3} onPress={goToRecuperarSenha}>
                    <Text style={estilos.textBotaos}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#372775',
        padding: 10,
        flex:1,
        alignItems:'center'

    },
    viewCabecalho:{
        //backgroundColor:'red',
        flexDirection:'row',
        flex:0.15,
        justifyContent:'center',
    },
    viewForms:{
        //backgroundColor:'green',
        //paddingVertical:10,
        flex:0.63,
        
    },
    viewBotoes:{
        //backgroundColor:'blue',
        flex:0.22,
        paddingTop:10,
    },
    textoLogo:{
        fontSize: 38,
        color:'#FFF',
        textAlign:'center',
        marginRight:30,
        fontFamily: 'AveriaLibre-Regular',
    },
    texto: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    textInput:{
        backgroundColor:'#FFF',
        width:653,
        height:35,
        marginBottom:0,
        fontFamily: 'AveriaLibre-Regular',
    },
    textBotao:{
        fontSize: 24,
        textAlign:'center',
        color:'#FFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    botao1:{
        backgroundColor:'#49B976',
        width:653,
        marginTop:10
    },
    botao2:{
        backgroundColor:'#419ED7',
        width:653,
        height:25,
        marginTop:10
    },
    botao3:{
        backgroundColor:'#B0CCDE',
        width:653,
        height:25,
        marginTop:10
    },
    textBotaos:{
        fontSize:18,
        color:'#FFF',
        textAlign:'center',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoErro:{
        fontSize:16,
        color:'#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    }

})

export default Login