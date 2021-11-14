import React from "react"
import {
  VStack,
  Center,
  ScrollView
} from "native-base"
import Logo from './Logo'
import Form from './Form'


export default class ScreenFormRegister extends React.Component {
  render() {
    return (
      <ScrollView >
        <Center flex={1} bg="violet.700" py={15}>
          <VStack w={{ base: "90%" }}>
            <Logo />
            <Form navigation={this.props.navigation} />
          </VStack >
        </Center>
      </ScrollView>
    )
  }
}

