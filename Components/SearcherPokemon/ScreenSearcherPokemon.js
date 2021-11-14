import React from 'react';
import { View, ScrollView } from 'react-native';
import MenuBar from './MenuBar';
import Header from './Header';
import Body from './Body';


export default class ScreenSearcherPokemon extends React.Component {

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
