import { View,Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const NovaConta = (props) => {
    const voltar = () => {
        props.navigation.goBack()
    }
    return (
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto} >E-mail</Text>
                <TextInput style={estilos.textoInput}></TextInput>


                <Text style={estilos.texto} >Senha</Text>
                <TextInput style={estilos.textoInput}></TextInput>

                <Text style={estilos.texto} >Repetir senha</Text>
                <TextInput style={estilos.textoInput}></TextInput>
                <Text style={estilos.textoErro}>O campo repetir senha difere da senha</Text>
            </View>

            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao} onPress={voltar}>
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
        justifyContent:'center'
    },
    viewBotao:{
        flex:0.2,
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
        justifyContent:'center',
    }
})

export default NovaConta