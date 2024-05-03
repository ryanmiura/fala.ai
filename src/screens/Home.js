import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Cartao from "../components/Cartao";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = (props) => {
    const goToNovaPesquisa = () =>{
        props.navigation.navigate('NovaPesquisa')
    }
    const goToModificarPesquisa = () =>{
        props.navigation.navigate('ModificarPesquisa')
    }

    return(
        <View style={estilos.view}>
            <View style={estilos.viewSearch}>
                <View style={estilos.pesquisa}>
                    <Icon color="#8B8B8B" name="search" size={20}/>
                    <TextInput placeholder="Insira o termo de busca..." style={estilos.textInput}></TextInput>
                </View>
            </View>

            <View style={estilos.viewCards}>
                <ScrollView contentContainerStyle={{alignItems:'center',marginLeft:25}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao nome="SECOMP 2023" data="10/10/2023" onPress={goToModificarPesquisa}></Cartao>
                    <Cartao nome="SECOMP 2022" data="10/10/2022"></Cartao>
                    <Cartao nome="SECOMP 2021" data="10/10/2021"></Cartao>
                    <Cartao nome="SECOMP 2020" data="10/10/2020"></Cartao>
                    <Cartao nome="SECOMP 2023" data="10/10/2023"></Cartao>
                </ScrollView>
                
                
            </View>

            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao} onPress={goToNovaPesquisa}>
                    <Text style={estilos.texto}>NOVA PESQUISA</Text>
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
    viewSearch:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'red',
    },
    pesquisa:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFF'
    },
    viewCards:{
        flex:0.6,
        //backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    viewBotao:{
        flex:0.2,
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
    },
    texto:{
        fontSize:24,
        color:'#FFF',
        fontFamily: 'AveriaLibre-Regular',
    },
    textInput:{
        backgroundColor:'#FFF',
        width:800,
        height:35

    },
    botao:{
        backgroundColor:'#49B976',
        width:800,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },

})

export default Home