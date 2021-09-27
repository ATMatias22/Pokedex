import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuBar from './Components/MenuBar';
import Header from './Components/Header';
import Body from './Components/Body';


export default class App extends React.Component {

  render() {
    return (
      <View>
        <MenuBar />
        <Header />
        <Body />
      </View>
    )
  };
}


