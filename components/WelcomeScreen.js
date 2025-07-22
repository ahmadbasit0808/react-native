import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";

import LittleLemonHeader from "./LittleLemonHeader";
import LittleLemonFooter from "./LittleLemonFooter";

export default function WelcomeScreen({ navigation }) {
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
      <View style={{ flexGrow: 1, justifyContent: "center" }}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
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
  headerText: {
    paddingHorizontal: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 25,
    marginVertical: 8,
    color: "#EDEFEE",
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
