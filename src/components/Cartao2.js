import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"


const Cartao2 = ({item, onPress}) => {
   const nome = item.nome
   const data = item.data
   const id = item.id
   const urlImagem = item.imageUrl

    return(
        <TouchableOpacity style={estilos.view} onPress={() => onPress(item)} >
            <Image style={estilos.imagem} source={{uri:urlImagem}}></Image>
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
        height:'50%',
        width:'60%'
    },
    texto1:{
        fontSize:22,
        color:'#3F92C5',
        paddingTop:5,
        fontFamily: 'AveriaLibre-Regular',
    },
    texto2:{
        fontSize:12,
        color:'#8B8B8B',
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default Cartao2