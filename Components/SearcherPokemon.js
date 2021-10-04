import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Pokemon from './Pokemon';


export default class SearcherPokemon extends React.Component {
  pokemonNumber;

  constructor(props) {
    super(props);
    this.state = {
      pokemonImage: '',
      pokemonName: '',
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
        pokemonImage: res.data.sprites.front_default,
        pokemonName: res.data.name.toUpperCase(),
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
      <View style={styles.body}>
        <Text style={styles.text}>Coloque el numero del pokemon</Text>
        <TextInput
          style={styles.input}
          placeholder="numero de pokemon"
          keyboardType="phone-pad"
          onChangeText={(value) => this.pokemonNumber = value}
        />
        <TouchableOpacity style={styles.btn} onPress={this.getPokemon}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        {!!this.state.message && <Text style={styles.text}>{this.state.message}</Text>}
        {!!this.state.pokemonImage && <Pokemon name={this.state.pokemonName} image={this.state.pokemonImage} />}
      </View>
    );
  }
}




const styles = StyleSheet.create({
  body: {
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginHorizontal: 15,
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'red',
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',

  }
});