import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ModificarPesquisa = () =>{
    return(
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto}>Nome</Text>
                <TextInput style={estilos.textInput}></TextInput>

                <Text style={estilos.texto}>Data</Text>
                <TextInput style={estilos.textInput} right={<TextInput.Icon icon="calendar"/>}></TextInput>

                <Text style={estilos.texto}>Imagem</Text>
                <View style={estilos.viewImagem}>
                    <Text style={estilos.textoImg}>Imagem da Pesquisa</Text>
                </View>
            </View>

            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.texto}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.viewApagar}>
                    <Icon color="#FFF" name="delete" size={30}/>
                    <Text style={estilos.texto}>Apagar</Text>
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
        flex:0.75,
    },
    viewBotao:{
        flex:0.25,
        flexDirection:'row',
        alignItems:'center'
    },
    texto:{
        color:'#FFF',
        fontSize:18,
        paddingTop:10,
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
        width:500,
        height:35,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        paddingRight:0
    },
    viewImagem:{
        backgroundColor:'#FFF',
        width:335,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    viewApagar:{
        alignItems:'center',
        paddingLeft:100
    }
})

export default ModificarPesquisa