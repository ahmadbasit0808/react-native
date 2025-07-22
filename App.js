/*
This component showcase use of following components
1.Navigation container to wrap the screens
2.CreateNativeStackNavigator to create the navigation (methods: Navigator , Screen)
3.Navigator (we can pass initialRouteName to set the initial screen. We can use screenOptions to set the styling of the app
such as headerstyle and contentstyle
4.Screen (name of screen that is passed to navigate() , options={{title:""}} to set a different title)
 options={{ headerShown: false }}) to hide the title , component: the component to be rendered
5.Header stylings (headerStyle to style the box of header, headertintcolor for color of header text
headertitlestyle for style of header text, headertitle and headerright takes an arrow function and 
return some component)
*/

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme, Image } from "react-native";
import { getThemedBg } from "./utils/colorSchemes";
import Login from "./components/Login";
import MenuItems from "./components/SectionList";
import WelcomeScreen from "./components/WelcomeScreen";
import Form from "./components/TextInput";
import MenuItemsFlat from "./components/FlatList";
import logo from "./img/image.png";
const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "#EE9972" },
          headerTintColor: "#111",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Image
              source={logo}
              style={{ width: 100, height: 40, resizeMode: "contain" }}
            />
          ),
          contentStyle: getThemedBg(colorScheme),
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
