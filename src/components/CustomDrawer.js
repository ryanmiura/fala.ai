import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

const CustomDrawer = (props) => {

    const email = useSelector((state)=> state.login.email)
    const uid = useSelector((state)=> state.login.uid)

    const sair = () => {
        props.navigation.popToTop()
    }

    return (
        <DrawerContentScrollView {...props} style={{padding: 20}}>

            <View>
                <Text style={{fontSize: 22, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', alignSelf: 'center'}}>{email}</Text>
                <Text style={{fontSize: 12, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular', alignSelf: 'center'}}>UID: {uid}</Text>
                <View style={{height: 2, backgroundColor: '#FFFFFF', marginVertical: 25}} />
            </View>

                <DrawerItemList {...props} />

            <View style={{ paddingTop: 100 }}>
                <DrawerItem 
                labelStyle={{fontSize: 20, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular'}} 
                label='Sair' onPress={sair} 
                icon={() => <Icon name="logout" size={30} color="#FFFFFF"/>}/>
            </View>
        
        </DrawerContentScrollView>
    )
}

export default CustomDrawer