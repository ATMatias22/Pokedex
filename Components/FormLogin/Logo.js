import React from "react"
import {
  Image
} from "native-base"


export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/titulo.png')}
        mx="auto"
        mb={30}
        alt="Logo PokeAPI"
      />
    )
  }
}