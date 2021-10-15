import React from 'react';
import { View, ScrollView } from 'react-native';
import MenuBar from './Components/MenuBar';
import Header from './Components/Header';
import Body from './Components/Body';


export default class App extends React.Component {

  render() {
    return (
      <ScrollView>
        <View >
          <MenuBar />
          <Header />
          <Body />
        </View>
      </ScrollView>
    )
  };
}


