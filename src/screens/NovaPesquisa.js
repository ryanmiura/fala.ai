import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {TextInput } from 'react-native-paper';
import { pesquisaCollection, storage } from "../firebase/config";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { launchCamera,launchImageLibrary } from "react-native-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const NovaPesquisa = (props) =>{

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [urlFoto, setUrlFoto] = useState('')
    const [foto, setFoto] = useState()

    const voltar = () => {
        props.navigation.goBack()
    }

    const capturarImagem = () => {
        launchCamera({mediaType: 'photo', cameraType:'back',quality:1})
        .then((result)=>{
            setUrlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        })
        .catch((erro)=>{
            console.log("Erro ao adicionar foto: " + erro)
        })
    }

    const addPesquisa = async () => {


        const imagemNome = `${new Date().getTime()}.jpg`
        const imagemRef = ref(storage, imagemNome)
        const file = await fetch(urlFoto)
        const blob = await file.blob()

        uploadBytes(imagemRef, blob, {contentType:'image/jpeg'})
        .then((result)=>{
            console.log("Arquivo enviado com suceso")
            getDownloadURL(imagemRef)
            .then((url)=>{
                console.log("URL de DOWNLOAD com sucesso: ")
                const docPesquisa = {
                    nome : nome ,
                    data : data,
                    imageUrl: url,
                    imageNome: imagemNome
                }
        
                addDoc(pesquisaCollection, docPesquisa)
                .then((docRef)=>{
                    console.log("Nova pesquisa add : " + docRef.id)
                    voltar()

                })
                .catch((erro) => {
                    console.log("Erro ao add nova pesquisa : " + erro)
                })



            })
            .catch((erro)=>{
                console.log("Erro ao getDownload : " + JSON.stringify.erro)
            })
        })
        .catch((erro)=>{
            console.log("Erro ao enviar imagem : " + erro)
        })


    }



    return(
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto}>Nome</Text>
                <TextInput style={estilos.textInput} onChangeText={setNome}></TextInput>
                <Text style={estilos.textoErro}>Preencha o nome da pesquisa</Text>

                <Text style={estilos.texto}>Data</Text>  
                <View style={estilos.data}>
                    <TextInput style={estilos.textInput} onChangeText={setData} right={<TextInput.Icon icon="calendar"/>}></TextInput>
                </View>
                <Text style={estilos.textoErro}>Preencha a data</Text>
                <Text style={estilos.texto}>Imagem</Text>

                <TouchableOpacity onPress={capturarImagem}>
                    {
                        urlFoto ?
                            <Image source={{uri: urlFoto}} style={{ width:100, height:70}} />
                        :
                            <View style={estilos.viewImagem}>
                                <Text style={estilos.textoImg}>Adicionar Imagem</Text>
                            </View> 

                    }
                       
                </TouchableOpacity>
                
            </View>

            <View style={estilos.viewBotao}>
                <TouchableOpacity style={estilos.botao} onPress={addPesquisa}>
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