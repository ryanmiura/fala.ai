import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import NovaConta from "./src/screens/NovaConta"
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Home from "./src/screens/Home"
import NovaPesquisa from "./src/screens/NovaPesquisa"
import ModificarPesquisa from "./src/screens/ModificarPesquisa"
import Cartao from "./src/components/Cartao"
import AcaoPesquisa from "./src/screens/AcaoPesquisa"
import Coleta from "./src/screens/Coleta"
import Drawer from "./src/screens/Drawer"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const Stack = createStackNavigator()

const App = () => {
    return (

        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="NovaConta"
                        component={NovaConta}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="RecuperarSenha"
                        component={RecuperarSenha}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    
                    <Stack.Screen
                        name="Drawer"
                        component={Drawer}
                        options={{headerShown:false
                        }
                        } />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="ModificarPesquisa"
                        component={ModificarPesquisa}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="NovaPesquisa"
                        component={NovaPesquisa}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="Cartao"
                        component={Cartao}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="AcaoPesquisa"
                        component={AcaoPesquisa}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                    <Stack.Screen
                        name="Coleta"
                        component={Coleta}
                        options={{
                            headerStyle: { backgroundColor: '#2B1D62', },
                            headerTintColor: '#fff',
                            headerTitleStyle: { fontFamily: 'AveriaLibre-Bold' },
                        }
                        } />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App