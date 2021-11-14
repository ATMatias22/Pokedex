import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>PokeAPI</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  }
});