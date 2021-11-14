
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenFormRegister from './Components/FormRegister/ScreenFormRegister';
import ScreenFormLogin from './Components/FormLogin/ScreenFormLogin';
import ScreenSearcherPokemon from './Components/SearcherPokemon/ScreenSearcherPokemon';
import { NativeBaseProvider, StatusBar, Image } from 'native-base';


const Stack = createNativeStackNavigator();

export default class App extends React.Component {

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ScreenFormLogin">
            <Stack.Group
              screenOptions={{
                headerStyle: {
                  backgroundColor: 'violet.700',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <Image
                    source={require("./assets/images/pokeball.png")}
                    alt="pokeball"

                  />
                ),
                headerRight: () => (
                  <Image
                    source={require("./assets/images/pokeball.png")}
                    alt="pokeball"
                  />
                ),
              }} >
              <Stack.Screen name="ScreenFormRegister" component={ScreenFormRegister} options={{ title: "Register" }} />
              <Stack.Screen name="ScreenFormLogin" component={ScreenFormLogin} options={{ title: "Login" }} />
              <Stack.Screen name="ScreenSearcherPokemon" component={ScreenSearcherPokemon} options={{ title: "Search" }} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}
