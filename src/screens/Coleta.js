import { StyleSheet, TouchableOpacity, View , Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

const Coleta = () => {
    return(
        <View style={estilos.view}>
            <View style={estilos.pergunta}>
                <Text style={estilos.textoPergunta}>O que você achou do Carnaval 2024?</Text>
            </View>
            <View style={estilos.caras}>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name="face-frown" size={100} color="#D71616"></Icon>
                    <Text style={estilos.texto}>Pessimo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name="face-frown-open" size={100} color="#FF360A"></Icon>
                    <Text style={estilos.texto}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name="face-meh" size={100} color="#FFC632"></Icon>
                    <Text style={estilos.texto}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name="face-grin" size={100} color="#37BD6D"></Icon>
                    <Text style={estilos.texto}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name="face-laugh-beam" size={100} color="#25BC22"></Icon>
                    <Text style={estilos.texto}>Excelente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor:'#372775',
        flex:1,
        
    },
    texto:{
        fontSize:30,
        color:'#FFF',
        fontFamily:'AveriaLibre-Regular'
    },
    textoPergunta:{
        fontSize:36,
        color:'#FFF',
        fontFamily:'AveriaLibre-Regular',
        textAlign:'center'
    },
    botao:{
        //backgroundColor:'#312464',
        width:200,
        height:200,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    caras:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        flex:0.2
    },
    pergunta:{
        flex:0.5,
        justifyContent:'center'
    }
})

export default Coleta