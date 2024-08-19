import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Cartao from "../components/Cartao";
import Icon from "react-native-vector-icons/MaterialIcons";
import Cartao2 from "../components/Cartao2";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";
import { query , onSnapshot, where } from "firebase/firestore";
import { pesquisaCollection } from "../firebase/config";

const Home = (props) => {

    const[busca, setBusca] = useState('')

    const goToNovaPesquisa = () =>{
        props.navigation.navigate('NovaPesquisa')
    }
    const goToModificarPesquisa = () =>{
        props.navigation.navigate('ModificarPesquisa')
    }
    const goToAcaoPesquisa = (item) =>{
        props.navigation.navigate('AcaoPesquisa',{item:item})
    }

    const testeLista = () => {
        listaPesquisas.forEach((element) => console.log(element))
    }

    const [listaPesquisas, setListaPesquisas] = useState()

    useEffect(()=>{
        let filtro = query(pesquisaCollection)
        
        if(busca !== ''){
            filtro = query(pesquisaCollection, where("nome", ">=", busca))
        }
        console.log(busca)

        const unsub = onSnapshot(filtro, (querySnapshot) => {
            const pesquisas = []
            querySnapshot.forEach((doc)=>{
            pesquisas.push({
                id : doc.id,
                ...doc.data()
            })
            })
            setListaPesquisas(pesquisas)
        })
    }, [busca])

    return(
        <View style={estilos.view}>
            <View style={estilos.viewSearch}>
                <View style={estilos.pesquisa}>
                    <Icon color="#8B8B8B" name="search" size={20}/>
                    <TextInput placeholder="Insira o termo de busca..." style={estilos.textInput} onChangeText={setBusca} ></TextInput>
                </View>
            </View>


            <View style={estilos.viewCards}>
                <FlatList data={listaPesquisas} renderItem={({item}) => <Cartao2 item={item} onPress={goToAcaoPesquisa}> </Cartao2>} horizontal={true} contentContainerStyle={{alignItems:'center',marginLeft:25}} showsHorizontalScrollIndicator={false} /> 
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