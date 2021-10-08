import React from 'react';
import { StyleSheet, Image, Text, } from 'react-native';

export default class Header extends React.Component {

  render() {
    return (
      <>
        <Text style={styles.text}>{this.props.name}</Text>
        <Image
          style={styles.imgPokemon}
          source={{ uri: this.props.image }}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,

  },
  imgPokemon: {
    width: "100%",
    height: 200,
  },
})