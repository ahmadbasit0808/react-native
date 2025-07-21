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
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        <Text style={styles.description}>
          Little Lemon is a charming neighbourhood bistro that serves simple
          food and classic cocktails in a lively but casual environment. We
          would love to hear your experience with us!
        </Text>
        <View style={styles.inputBox}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="John"
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessible={true}
            accessibilityLabel="Input for First Name"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Doe"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessible={true}
            accessibilityLabel="Input for Last Name"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Email Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="johndoe@gmail.com"
            value={formData.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
            accessible={true}
            accessibilityLabel="Input for Email Address"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
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
          <Text style={styles.label}>Feedback:</Text>
          <TextInput
            style={styles.feedback}
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
          style={styles.button}
          onPress={handleSubmit}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Submit form button"
        >
          <Text style={styles.buttonText}>Submit</Text>
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
    fontSize: 30,
    color: "#f5f5f5",
    padding: 30,
    textAlign: "center",
  },
  description: {
    fontSize: 21,
    color: "#f5f5f5",
    padding: 10,
    textAlign: "center",
  },
  inputBox: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  label: {
    color: "white",
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 5,
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingVertical: 8,
    height: 40,
    borderRadius: 8,
  },
  button: {
    alignSelf: "center",
    padding: 10,
    width: "40%",
    backgroundColor: "#14c8faff",
    borderRadius: 8,
    margin: 25,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  feedback: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingVertical: 8,
    textAlignVertical: "top",
    height: 140,
    borderRadius: 8,
  },
});
