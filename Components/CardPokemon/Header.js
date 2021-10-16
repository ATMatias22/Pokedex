import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class Header extends React.Component {

  render() {
    return (
      <>
        <Text style={styles.text}>{this.props.name}</Text>
        <View style={styles.container}>
          <Image
            style={styles.imgPokemon}
            source={{ uri: this.props.image }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  imgPokemon: {
    aspectRatio: 2,
    resizeMode: 'contain',

  },
  container: {
    marginVertical: 20
  }

})