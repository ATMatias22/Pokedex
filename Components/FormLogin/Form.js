import React from "react"
import {
  FormControl,
  Input,
  Box,
  Button,
  IconButton,
  Text,
  Link
} from "native-base"
import { Ionicons } from "@expo/vector-icons"


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleClick = () => {
    this.setState(state => ({
      show: !state.show
    }))
  }

  render() {
    return (
      <>
        <Box >
          <FormControl mb="5">
            <FormControl.Label _text={styles.inputLabel}>Mail</FormControl.Label>
            <Input keyboardType="email-address"
              _focus={styles.inputFocus}
              color={styles.inputTextColor}
              fontSize={styles.inputTextFontSize} />
          </FormControl>
        </Box>
        <Box >
          <FormControl mb="5">
            <FormControl.Label _text={styles.inputLabel}>Password</FormControl.Label>
            <Input
              type={this.state.show ? "text" : "password"}
              InputRightElement={
                <IconButton
                  onPress={this.handleClick}
                  h="full"
                  _icon={{
                    as: Ionicons,
                    name: this.state.show ? "eye" : "eye-off",
                    color: "white"
                  }}
                  _pressed={{
                    bg: "fuchsia.900"
                  }}
                />
              }
              _focus={styles.inputFocus}
              color={styles.inputTextColor}
              fontSize={styles.inputTextFontSize}
            />
          </FormControl>
        </Box>


        <Button w="70%" mx="auto" my={5} bg="orange.500"
          _text={{
            fontSize: "lg"
          }}
          _pressed={{
            bg: "orange.300"
          }}
          onPress={() => this.props.navigation.navigate('ScreenSearcherPokemon')}
        >Log in</Button>
        <Box flexDirection="row" justifyContent="center">
          <Text fontSize="lg" color="white" >
            You do not have an account?{" "}
          </Text>
          <Link
            onPress={() => this.props.navigation.navigate('ScreenFormRegister')}
            _text={{
              color: "orange.500",
              fontSize: "lg",
            }}
          >
            click here
          </Link>
        </Box>
      </>
    )
  }
}


const styles = {
  inputLabel: { color: "primary.50", fontSize: "lg", letterSpacing: 1 },
  inputFocus: {
    borderColor: "primary.50",
    borderWidth: 3
  },
  inputTextColor: "primary.50",
  inputTextFontSize: "md"
}
