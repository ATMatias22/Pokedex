import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { capitalizeFirstLetter, colorTypes } from '../../helpers/FunctionStyles.js';

export default class CardPokemon extends React.Component {
  render() {
    return (
      <>
        <View style={styles.body} >
          <FlatList
            data={this.props.pokemonType}
            renderItem={({ item }) => (
              <Text style={stylesForType(item.name)} > {capitalizeFirstLetter(item.name)}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginVertical: 5,
  },
});

const stylesForType = (type) => {
  return {
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    marginVertical: 5,
    backgroundColor: colorTypes(capitalizeFirstLetter(type)),
  }
}