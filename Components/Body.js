import React from 'react';
import { View } from 'react-native';
import SearcherPokemon from './SearcherPokemon';

export default class Header extends React.Component {
  render() {
    return (
      <View >
        <SearcherPokemon />
      </View>
    );
  }
}

