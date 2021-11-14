import React from 'react';
import { View, StyleSheet } from 'react-native';
import Searcher from './Searcher';

export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Searcher />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 12,
  }
})