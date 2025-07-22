/*
This component showcase use of following components
1.TextInput (handling the input using onChangeText , placeHolder , keyboardType , password hidden maxLength , multiline)
2.Touchable Opacity (custom buttons to handle form submission ( onPress) )
3.Alert (to show alerts)
4.Email Checker ((!/\S+@\S+\.\S+/.test(email)))
5.KeyboardAvoidingView and Platform (the input box does not dissappear when keyboard is opened)
6.keyboardDismissMode (the keyboard is dismissed on interaction by the user in ScrollView)
*/
import { useState } from "react";
import {
  Text,
  useColorScheme,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import {
  getThemedText,
  getThemedInput,
  getThemedBg,
} from "../utils/colorSchemes";
import { ButtonStyles } from "../styles/button";
export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      feedback: "",
    });
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { firstName, email, feedback } = formData;
    if (!firstName || !email || !feedback) {
      Alert.alert("Incomplete Form", "Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }
    Alert.alert(`Form Submitted", "Thanks for your feedback ${firstName} !`);
    resetForm();
  };

  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={getThemedBg(colorScheme)}
      >
        <Text style={getThemedText(styles.title, colorScheme)}>
          Feedback Form
        </Text>
        <Text style={getThemedText(styles.description, colorScheme)}>
          Share your experience with us at Little Lemon
        </Text>
        <View style={styles.inputBox}>
          <Text style={getThemedText(styles.label, colorScheme)}>
            First Name:
          </Text>
          <TextInput
            style={getThemedInput(styles.input, colorScheme)}
            placeholder="John"
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessible={true}
            accessibilityLabel="Input for First Name"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={getThemedText(styles.label, colorScheme)}>
            Last Name:
          </Text>
          <TextInput
            style={getThemedInput(styles.input, colorScheme)}
            placeholder="Doe"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessible={true}
            accessibilityLabel="Input for Last Name"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={getThemedText(styles.label, colorScheme)}>
            Email Address:
          </Text>
          <TextInput
            style={getThemedInput(styles.input, colorScheme)}
            placeholder="johndoe@gmail.com"
            value={formData.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
            accessible={true}
            accessibilityLabel="Input for Email Address"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={getThemedText(styles.label, colorScheme)}>Phone:</Text>
          <TextInput
            style={getThemedInput(styles.input, colorScheme)}
            placeholder="03225663766"
            value={formData.phone}
            maxLength={11}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange("phone", text)}
            accessible={true}
            accessibilityLabel="Input for Phone Number"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={getThemedText(styles.label, colorScheme)}>
            Feedback:
          </Text>
          <TextInput
            style={getThemedInput(styles.feedback, colorScheme)}
            multiline={true}
            maxLength={250}
            placeholder="Enter your message."
            value={formData.feedback}
            onChangeText={(text) => handleChange("feedback", text)}
            accessible={true}
            accessibilityLabel="Input for Feedback"
          />
        </View>
        <TouchableOpacity
          style={ButtonStyles.button}
          onPress={handleSubmit}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Submit form button"
        >
          <Text style={ButtonStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    padding: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  inputBox: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  label: {
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 5,
  },
  input: {
    paddingLeft: 10,
    paddingVertical: 8,
    height: 40,
    borderRadius: 8,
  },
  feedback: {
    paddingLeft: 10,
    paddingVertical: 8,
    textAlignVertical: "top",
    height: 140,
    borderRadius: 8,
  },
});
