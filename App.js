import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";

import Login from "./components/Login";
import MenuItems from "./components/SectionList";
import WelcomeScreen from "./components/WelcomeScreen";
import Form from "./components/TextInput";
import MenuItemsFlat from "./components/FlatList";

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#EE9972" },
          contentStyle: {
            backgroundColor: colorScheme === "light" ? "#dddddd" : "#333333",
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Feedback" component={Form} />
        <Stack.Screen
          options={{ title: "Menu" }}
          name="ListMenu"
          component={MenuItemsFlat}
        />
        <Stack.Screen
          options={{ title: "Menu" }}
          name="SectionMenu"
          component={MenuItems}
        />
        <Stack.Screen
          name="Welcome"
          options={{ title: "Home", headerShown: false }}
          component={WelcomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
