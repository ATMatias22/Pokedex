import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearcherPokemon from './SearcherPokemon';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <SearcherPokemon />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  body: {

  },
});