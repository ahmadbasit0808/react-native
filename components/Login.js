/*
This component showcase use of following components
1.TextInput (handling the input using onChangeText , placeHolder , keyboardType , password hidden)
2.Pressable (custom buttons and text pressables to handle form submission (android_ripple: add ripple behavior , onPress) )
3.Alert (to show alerts)
4.ImageBackground (to add bg images)
5.KeyboardAvoidingView and Platform (the input box does not dissappear when keyboard is opened)
6.keyboardDismissMode (the keyboard is dismissed on interaction by the user in ScrollView)
7.Conditional Rendering (render components on basis of some condition)
8.useColorScheme (Helps in maintaining app when its in light and dark modes)
*/
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
  useColorScheme,
  Platform,
} from "react-native";
import bgImage from "../img/image.png";
import {
  getThemedText,
  getThemedInput,
  getThemedBgScreen,
} from "../utils/colorSchemes";
import { ButtonStyles } from "../styles/button";

export default function Login() {
  const colorScheme = useColorScheme();
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [login, onChangeLogin] = useState(false);

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Please fill the information.");
      return;
    }
    onChangeLogin(!login);
  };

  const handleForget = () => {
    Alert.alert("Khana khana bhi bhool jaty ho kya 🙃🫠");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={getThemedBgScreen(styles.container, colorScheme)}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode="on-drag"
      >
        <ImageBackground
          resizeMode="cover"
          style={styles.bgImage}
          source={bgImage}
        >
          <Text style={getThemedText(styles.title, colorScheme)}>
            Welcome to Little Lemon {colorScheme}
          </Text>
          {!login && (
            <>
              <Text style={getThemedText(styles.heading, colorScheme)}>
                Login to Continue
              </Text>
              <TextInput
                style={getThemedInput(styles.input, colorScheme)}
                placeholder="Enter your email"
                value={email}
                onChangeText={onChangeEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={getThemedInput(styles.input, colorScheme)}
                placeholder="Enter your password"
                value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
              />
              <Pressable onPress={handleForget}>
                <Text style={styles.fpText}>Forgot your password</Text>
              </Pressable>
              <Pressable
                android_ripple={{
                  color: "#ff00ff",
                  radius: 200,
                }}
                style={ButtonStyles.button}
                onPress={handleSubmit}
              >
                <Text style={ButtonStyles.buttonText}>Login</Text>
              </Pressable>
            </>
          )}
          {login && (
            <>
              <Text style={getThemedText(styles.heading, colorScheme)}>
                Logged in with Id {email}
              </Text>
              <Pressable
                style={ButtonStyles.button}
                onPress={() => {
                  onChangeLogin(!login);
                  onChangeEmail("");
                  onChangePassword("");
                }}
              >
                <Text style={ButtonStyles.buttonText}>
                  Login with different Id
                </Text>
              </Pressable>
            </>
          )}
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  bgImage: {
    marginVertical: 20,
    flexGrow: 1,
    padding: 20,
  },
  title: {
    padding: 30,
    textAlign: "center",
    fontSize: 30,
  },
  heading: {
    padding: 20,
    textAlign: "center",
    fontSize: 22,
  },
  input: {
    marginBottom: 10,
    borderRadius: 6,
    paddingLeft: 12,
    fontSize: 16,
    color: "black",
  },
  fpText: {
    color: "#ff7700ff",
    fontSize: 14,
    paddingHorizontal: 10,
  },
});
