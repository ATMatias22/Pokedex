import React from 'react';
import Header from './Header';
import Body from './Body';
import { VStack, Center } from 'native-base';

export default class CardPokemon extends React.Component {
  render() {

    return (
      <Center my={10}>
        <VStack borderColor="violet.800" borderWidth={4} bg="violet.300" w={200} py={15} px={5} borderTopLeftRadius={20} borderTopRightRadius={20}>
          <Header name={this.props.name} image={this.props.image} />
          <Body pokemonData={this.props.pokemonData} />
        </VStack>
      </Center>
    );
  }
}


