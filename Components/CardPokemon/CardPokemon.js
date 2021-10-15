import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class CardPokemon extends React.Component {
  render() {

    return (
      <View style={styles.section}>
        <View style={styles.cardPokemon}>
          <Header name={this.props.name} image={this.props.image} />
          <Body pokemonData={this.props.pokemonData} />
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  cardPokemon: {
    borderColor: 'red',
    borderWidth: 5,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  section: {
    marginTop: 10,
    alignItems: 'center',
  }
});
