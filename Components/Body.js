import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearcherPokemon from './SearcherPokemon';

export default class Body extends React.Component {
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
    padding: 12,
  }
})