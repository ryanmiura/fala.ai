import { StyleSheet, View , Text} from "react-native";

const Agradecimento = () => {
    return(
        <View style={estilos.view}>
            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#372775',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
        fontSize:36,
        color:'#FFF',
        fontFamily:'AveriaLibre-Regular',
        marginTop:10,
    },
})

export default Agradecimento