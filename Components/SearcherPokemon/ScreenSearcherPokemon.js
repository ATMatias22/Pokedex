import React from 'react';
import Header from './Header';
import Body from './Body';
import {
  VStack,
  Center,
  ScrollView
} from "native-base"

export default class ScreenSearcherPokemon extends React.Component {

  render() {
    return (
      <ScrollView bg="warmGray.300">
        <Center >
          <VStack w={{ base: "90%" }}>
            <Header />
            <Body />
          </VStack >
        </Center>
      </ScrollView>

    )
  };
}
