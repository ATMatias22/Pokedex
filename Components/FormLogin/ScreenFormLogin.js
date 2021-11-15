import React from "react"
import {
  VStack,
  Center,
} from "native-base"
import Form from "./Form";
import Logo from "./Logo";

export default class ScreenFormLogin extends React.Component {
  render() {
    return (
      <Center flex={1} bg="violet.700" >
        <VStack w={{ base: "90%" }} >
          <Logo />
          <Form navigation={this.props.navigation} />
        </VStack >
      </Center>
    )
  }
}


