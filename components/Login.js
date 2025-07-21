import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      Alert.alert("Please fill the information.");
      return;
    }
    Alert.alert("Login Successful");
    onChangeEmail("");
    onChangePassword("");
  };

  const handleForget = () => {
    Alert.alert("Khana khana bhi bhool jaty ho kya 🙃🫠");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        <Text style={styles.heading}>Login to Continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
        <TouchableOpacity activeOpacity={0.8} onPress={handleForget}>
          <Text style={styles.fpText}>Forgot your password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  title: {
    padding: 30,
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  heading: {
    padding: 20,
    textAlign: "center",
    fontSize: 22,
    color: "white",
  },
  input: {
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 6,
    paddingLeft: 12,
    fontSize: 16,
  },
  fpText: {
    color: "#2fd7ea",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#EE9972",
    alignSelf: "center",
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
});
