import React from 'react';
import { colorTypes } from '../../../helpers/FunctionStyles.js';
import { Text, View, FlatList, HStack } from "native-base"

export default class CardPokemon extends React.Component {

  render() {

    return (
      <View >
        <View style={styles.dataField}  >
          <Text style={styles.TextContent} >ID </Text>
          <Text style={styles.DataContent} >{this.props.pokemonData.id} </Text>
        </View>

        <FlatList
          style={styles.dataField}
          data={this.props.pokemonData.types}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.containerFlatListTypes}>
              <Text style={stylesForType(item.type)} >{item.type} </Text>
            </View>
          )}
          keyExtractor={(index) => index.toString()}
        />

        <View style={styles.dataField}>
          <HStack >
            <View style={styles.childContainer}>
              <Text style={styles.TextContent} >Altura </Text>
              <Text style={styles.DataContent} >{`${this.props.pokemonData.height} m`} </Text>
            </View>
            <View style={styles.childContainer}>
              <Text style={styles.TextContent} >Peso </Text>
              <Text style={styles.DataContent} >{`${this.props.pokemonData.weight} kg`} </Text>
            </View>
          </HStack>
        </View>

        <FlatList
          style={styles.dataField}
          data={this.props.pokemonData.abilities}
          renderItem={({ item }) => (
            <View style={styles.containerFlatListAbilities}>
              <Text style={styles.TextContent} >{!item.is_hidden ? `Habilidad ${item.slot}` : `Habilidad oculta`} </Text>
              <Text style={styles.DataContent}>{item.name} </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>


    );
  }
}


const styles = {
  dataField: {
    borderBottomWidth: 3,
  },

  containerFlatListTypes: {
    flex: 1,
  },
  containerFlatListAbilities: {
    alignItems: 'center'
  },

  DataContent: {
    fontSize: 18,
    textAlign: 'center'
  },
  TextContent: {
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },

  childContainer: {
    flex: 1,
  },
  border: {
    borderWidth: 2,
    borderColor: 'red'

  }
};

const stylesForType = (type) => {
  return {
    borderRadius: 8,
    color: 'white',
    padding: 5,
    textAlign: 'center',
    marginVertical: 5,
    backgroundColor: colorTypes(type),
  }
}