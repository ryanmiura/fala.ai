import { StyleSheet, TouchableOpacity, View , Text} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AcaoPesquisa = () => {
    return(
        <View style={estilos.view}>
            <TouchableOpacity style={estilos.botao}>
                <Icon name="file-edit-outline" size={100} color="#FFF"></Icon>
                <Text style={estilos.texto}>Modificar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao}>
                <Icon name="text-box-check-outline" size={100} color="#FFF"></Icon>
                <Text style={estilos.texto}>Coletar Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botao}>
                <Icon name="radar" size={100} color="#FFF"></Icon>
                <Text style={estilos.texto}>Relatorio</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#372775',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    texto:{
        fontSize:30,
        color:'#FFF',
        fontFamily:'AveriaLibre-Regular'
    },
    botao:{
        backgroundColor:'#312464',
        width:200,
        height:200,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default AcaoPesquisa