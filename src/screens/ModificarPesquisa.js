import { updateDoc,doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import {TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { db, storage } from "../firebase/config";
import { deleteObject, ref, uploadBytes , getDownloadURL} from "firebase/storage";
import { launchCamera } from "react-native-image-picker";


const ModificarPesquisa = (props) =>{
    const {item} = props.route.params
    
    const [nome, setNome] = useState(item.nome)
    const [data, setData] = useState(item.data)
    const [urlFoto, setUrlFoto] = useState('')
    const [foto, setFoto] = useState()

    const voltar2 = () => {
        props.navigation.pop(2)
        
    }


    const capturarImagem = () => {
        launchCamera({mediaType: 'photo', cameraType:'back',quality:1})
        .then((result)=>{
            setUrlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        })
        .catch((erro)=>{
            console.log("Erro ao adicionar foto: " + JSON.stringify.erro)
        })
    }

    const changePesquisa = async (id) => {
        const pesquisaRef = doc(db, "pesquisas", id)

        if(urlFoto == ''){
            updateDoc(pesquisaRef, {
                nome: nome,
                data: data
            })
            .then(()=>{
                console.log("Documento atualizado com sucesso: ")
                voltar2()
            })
            .catch((error)=>{
                console.log("Erro ao atualizar pesquisa: " + error)
            })
        }else{
            deletaImagem()
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
                    updateDoc(pesquisaRef, docPesquisa)
                    .then(()=>{
                        console.log("Documento atualizado com sucesso: ")
                        voltar2()
                    })
                    .catch((error)=>{
                        console.log("Erro ao atualizar pesquisa: " + error)
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
    } 


    const deletaImagem = () => {
        const imagemAntigaRef = ref(storage, item.imageNome)

        deleteObject(imagemAntigaRef)
        .then(()=>{
            console.log("imagem deletada com sucesso")
        })
        .catch((erro)=>{
            console.log("Erro ao deletar imagem: " + erro)
        })
    }

    const deletePesquisa = (id) => {
        deleteDoc(doc(db, "pesquisas", id))
        .then(()=>{
            console.log("Pesquisa deletado com sucesso !!!")
            voltar2()
        })
        .catch((erro)=>{
            console.log("Erro ao deletar pesquisa: " + erro)
        })
        deletaImagem()
    }

    return(
        <View style={estilos.view}>
            <View style={estilos.viewForms}>
                <Text style={estilos.texto}>Nome</Text>
                <TextInput style={estilos.textInput} onChangeText={setNome} defaultValue={item.nome} ></TextInput>

                <Text style={estilos.texto}>Data</Text>
                <TextInput style={estilos.textInput} right={<TextInput.Icon icon="calendar"/>} onChangeText={setData} defaultValue={item.data} ></TextInput>

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
                <TouchableOpacity style={estilos.botao} onPress={()=>{changePesquisa(item.id)}}>
                    <Text style={estilos.texto}>SALVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.viewApagar} onPress={()=>{deletePesquisa(item.id)}} >
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