/*
This component showcase use of following components
1.The use of navigation.navigate to navigate or move between screens
2. contentContainerStyle={{ flexGrow: 1 }} to align the content accordingly
*/

import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
  View,
} from "react-native";

import LittleLemonHeader from "./LittleLemonHeader";
import LittleLemonFooter from "./LittleLemonFooter";
import { getThemedText } from "../utils/colorSchemes";

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <ScrollView indicatorStyle="white" contentContainerStyle={{ flexGrow: 1 }}>
      <LittleLemonHeader />

      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("ListMenu")}
        >
          <Text style={styles.buttonText}>Menu</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SectionMenu")}
        >
          <Text style={styles.buttonText}>Section</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Feedback")}
        >
          <Text style={styles.buttonText}>Feedback</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={getThemedText(styles.headerText, colorScheme)}>
          Welcome to Little Lemon
        </Text>
        <Text style={getThemedText(styles.regularText, colorScheme)}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
      <LittleLemonFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
  },
  headerText: {
    paddingHorizontal: 40,
    fontSize: 30,
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 25,
    marginVertical: 8,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#EE9972",
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
});
