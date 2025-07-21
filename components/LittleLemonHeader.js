/*
This component showcase use of following components
1.Image component (resizeMode)
*/
import { View, StyleSheet, Image } from "react-native";
import logo from "../img/logo.png";
export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        resizeMode="contain"
        source={logo}
        accessibilityLabel="Little Lemon Logo"
        accessibility={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerImage: {
    height: 100,
    width: "80%",
    fontSize: 30,
    color: "black",
    alignSelf: "center",
  },
});
