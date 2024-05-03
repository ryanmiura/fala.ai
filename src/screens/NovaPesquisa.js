import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {TextInput } from 'react-native-paper';

const NovaPesquisa = () =>{
    return(
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto}>Nome</Text>
                <TextInput style={estilos.textInput}></TextInput>
                <Text style={estilos.textoErro}>Preencha o nome da pesquisa</Text>

                <Text style={estilos.texto}>Data</Text>  
                <View style={estilos.data}>
                    <TextInput style={estilos.textInput} right={<TextInput.Icon icon="calendar"/>}></TextInput>
                </View>
                <Text style={estilos.textoErro}>Preencha a data</Text>
                <Text style={estilos.texto}>Imagem</Text>
                <View style={estilos.viewImagem}>
                    <Text style={estilos.textoImg}>Camera/Galeria de imagens</Text>
                </View>
            </View>

            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.texto}>CADASTRAR</Text>
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
        flex:0.8,
    },
    viewBotao:{
        flex:0.2,
    },
    texto:{
        color:'#FFF',
        fontSize:18,
        fontFamily: 'AveriaLibre-Regular',
    },
    textoErro:{
        fontSize:16,
        color:'#FD7979',
        fontFamily: 'AveriaLibre-Regular',
    },
    textoImg:{
        fontSize:18,
        color:'#939393',
        fontFamily: 'AveriaLibre-Regular',
    },
    textInput:{
        backgroundColor:'#FFF',
        width:653,
        height:35,
        marginBottom:0,
    },
    botao:{
        backgroundColor:'#49B976',
        width:653,
        height:35,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    viewImagem:{
        backgroundColor:'#FFF',
        width:335,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    data:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFF'
    }
})

export default NovaPesquisa