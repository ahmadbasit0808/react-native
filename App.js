import { View, StyleSheet, SafeAreaView, useColorScheme } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import Login from "./components/Login";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          colorScheme === "light"
            ? { backgroundColor: "#dddddd" }
            : { backgroundColor: "#333333" },
        ]}
      >
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
  },
  footerContainer: { backgroundColor: "#333333" },
});
