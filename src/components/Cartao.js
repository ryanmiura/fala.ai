import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"


const Cartao = (props,navigation) => {
    const nome = props.nome
    const data = props.data

    const goToModificarPesquisa = () =>{
        props.navigation.navigate('ModificarPesquisa')
    }
    return(
        <TouchableOpacity style={estilos.view} onPress={goToModificarPesquisa}>
            <Image style={estilos.imagem} source={require('../assets/image.png')}></Image>
            <Text style={estilos.texto1}>{nome}</Text>
            <Text style={estilos.texto2}>{data}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#FFF',
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        marginRight:25,
    },
    imagem:{
        height:'40%',
        width:'50%'
    },
    texto1:{
        fontSize:22,
        color:'#3F92C5',
        paddingTop:25,
        fontFamily: 'AveriaLibre-Regular',
    },
    texto2:{
        fontSize:12,
        color:'#8B8B8B',
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default Cartao