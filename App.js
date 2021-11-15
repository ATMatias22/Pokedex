
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenFormRegister from './Components/FormRegister/ScreenFormRegister';
import ScreenFormLogin from './Components/FormLogin/ScreenFormLogin';
import ScreenSearcherPokemon from './Components/SearcherPokemon/ScreenSearcherPokemon';
import { NativeBaseProvider, StatusBar, Image, IconButton } from 'native-base';
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar hidden={true} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ScreenSearcherPokemon">
            <Stack.Group screenOptions={styles.screenOptionsForms} >
              <Stack.Screen name="ScreenFormRegister" component={ScreenFormRegister} options={{ title: "Register" }} />
              <Stack.Screen name="ScreenFormLogin" component={ScreenFormLogin} options={{ title: "Login" }} />
            </Stack.Group>

            <Stack.Group screenOptions={({ navigation }) => (styles.screenOptionsApp(navigation))} >
              <Stack.Screen name="ScreenSearcherPokemon" component={ScreenSearcherPokemon} options={{ title: "Searcher pokemon" }} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider >
    );
  }
}



const styles = {
  screenOptionsForms: {
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
    )
  },



  screenOptionsApp: (navigation) => ({
    headerStyle: {
      backgroundColor: 'violet.700',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <IconButton
        onPress={() => navigation.navigate('ScreenFormLogin')}
        _icon={{
          as: Ionicons,
          name: "power",
          color: "primary.50"
        }}
        _pressed={{
          bg: "violet.600"
        }}
      />
    )
  })
}