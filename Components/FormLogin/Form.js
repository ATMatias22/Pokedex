import React from "react"
import {
  FormControl,
  Input,
  Box,
  Button,
  IconButton,
  Text,
  Link,
  HStack
} from "native-base"
import { Ionicons } from "@expo/vector-icons"


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  clickPasswordBtn = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }))
  }

  render() {
    return (
      <>
        <Box >
          <FormControl mb="5">
            <FormControl.Label _text={styles.input.label}>Mail</FormControl.Label>
            <Input keyboardType="email-address"
              _focus={styles.input.focus}
              color={styles.input.textColor}
              fontSize={styles.input.textFontSize} />
          </FormControl>
        </Box>
        <Box >
          <FormControl mb="5">
            <FormControl.Label _text={styles.input.label}>Password</FormControl.Label>
            <Input
              type={this.state.showPassword ? "text" : "password"}
              InputRightElement={
                <IconButton
                  onPress={this.clickPasswordBtn}
                  _icon={{
                    as: Ionicons,
                    name: this.state.showPassword ? styles.input.password.icon.showText : styles.input.password.icon.hideText,
                    color: styles.input.password.icon.color
                  }}
                  _pressed={styles.input.password.icon.pressed}
                />
              }
              _focus={styles.input.focus}
              color={styles.input.textColor}
              fontSize={styles.input.textFontSize}
            />
          </FormControl>
        </Box>


        <Button w="70%" mx="auto" my={5} bg="orange.500"
          _text={styles.button.text}
          _pressed={styles.button.pressed}
          onPress={() => this.props.navigation.navigate('ScreenSearcherPokemon')}
        >Log in</Button>
        <HStack justifyContent="center" flexWrap="wrap">
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
        </HStack>
      </>
    )
  }
}

const styles = {

  input: {
    label: { color: "primary.50", fontSize: "lg", letterSpacing: 1 },
    focus: {
      borderColor: "primary.50",
      borderWidth: 3
    },
    textColor: "primary.50",
    textFontSize: "md",
    password: {
      icon: {
        showText: "eye",
        hideText: "eye-off",
        color: "white",
        pressed: {
          bg: "fuchsia.900"
        }
      }

    }
  },
  button: {
    text: {
      fontSize: "lg"
    },
    pressed: {
      bg: "orange.300"
    }
  }
}
