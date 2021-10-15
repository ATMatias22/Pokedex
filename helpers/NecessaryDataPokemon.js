import { capitalizeFirstLetter } from './FunctionStyles.js';


export default class NecessaryDataPokemon {
  id; height; weight; abilities; types;
  constructor(id, height, weight, abilities, types) {
    this.id = id;
    this.height = this.#decimetersToMeters(height);
    this.weight = this.#hectogramsToKilograms(weight);
    this.abilities = this.#setAbilities(abilities);
    this.types = this.#setTypes(types);
  }

  #setAbilities = (abilities) => {
    return abilities.map(ability => {
      return {
        name: capitalizeFirstLetter(ability.ability.name),
        is_hidden: ability.is_hidden,
        slot: ability.slot
      }
    })
  }

  #setTypes = (types) => {
    return types.map(type => {
      return {
        type: capitalizeFirstLetter(type.type.name),
        slot: type.slot
      }
    })
  }

  #decimetersToMeters = (decimeters) => {
    return decimeters / 10;
  }

  #hectogramsToKilograms = (hectograms) => {
    return hectograms / 10;
  }
}

