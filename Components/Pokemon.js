import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Pokemon extends React.Component {

  render() {
    return (
      <View >
        <Text style={styles.text}>{this.props.name}</Text>
        <View style={styles.containerPokemon}>
          <Image
            style={styles.imgPokemon}
            source={{ uri: this.props.image }}
          />
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,

  },
  containerPokemon: {
    marginTop: 5,
    alignItems: 'center',
  },
  imgPokemon: {
    width: 200,
    height: 200,

  }

});