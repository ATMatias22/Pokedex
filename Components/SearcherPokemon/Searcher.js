import React from 'react';
import { Text, Box, FormControl, Input, Button } from 'native-base';
import axios from 'axios';
import CardPokemon from './CardPokemon/CardPokemon';
import NecessaryDataPokemon from '../../helpers/NecessaryDataPokemon.js';



export default class Searcher extends React.Component {
  pokemonNumber;

  constructor(props) {
    super(props);
    this.state = {
      pokemonImage: '',
      pokemonName: '',
      pokemonData: [],
      message: '',
    }
  }

  getPokemon = async () => {
    this.setState({
      message: 'Buscando pokemon',
      pokemonImage: '',
      pokemonName: '',
    })

    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonNumber}`);
      this.setState({
        pokemonImage: `http://play.pokemonshowdown.com/sprites/xyani/${res.data.name}.gif`,
        pokemonName: res.data.name.toUpperCase(),
        pokemonData: new NecessaryDataPokemon(res.data.id, res.data.height, res.data.weight, res.data.abilities, res.data.types),
        message: ''
      })
    } catch (error) {
      this.setState({
        message: 'No existe pokemon',
        pokemonImage: '',
        pokemonName: '',
      })
    }
  }

  render() {
    return (
      <Box>
        <FormControl mb="5" >
          <FormControl.Label _text={styles.input.label}>Put the pokemon number</FormControl.Label>
          <Input
            keyboardType="number-pad"
            borderColor={styles.input.borderColor}
            borderWidth={styles.input.borderWidth}
            _focus={styles.input.focus}
            fontSize={styles.input.fontSize}
            onChangeText={(value) => this.pokemonNumber = value}
          />
        </FormControl>

        <Button onPress={this.getPokemon}
          bg={styles.button.bg}
          _pressed={styles.button.pressed}
          _text={styles.button.text}
        >
          Search
        </Button>
        {!!this.state.message && <Text textAlign="center" mt={2} fontSize="xl">{this.state.message}</Text>}
        {!!this.state.pokemonImage && <CardPokemon name={this.state.pokemonName} image={this.state.pokemonImage} pokemonData={this.state.pokemonData} />}
      </Box>
    );
  }
}




const styles = {
  input: {
    borderColor: "violet.900",
    borderWidth: 2,
    fontSize: "xl",
    label: {
      fontSize: "xl",
      mx: "auto"
    },
    focus: {
      borderColor: "violet.900",
      borderWidth: 3
    },
  },
  button: {
    bg: "red.600",
    pressed: {
      bg: "red.800",
    },
    text: {
      fontSize: "md"
    }
  }
}
