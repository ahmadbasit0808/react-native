import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Login />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
