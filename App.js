/*
This component showcase use of following components
1.Navigation container to wrap the screens
2. createBottomTabNavigator to create the bottom tab navigation (methods: Navigator , Screen)
3.Navigator (we can pass initialRouteName to set the initial screen. We can use screenOptions to set the styling of the app
such as headerstyle and contentstyle
4.Screen (name of screen, options={{title:""}} to set a different title)
 options={{ headerShown: false }}) to hide the title , component: the component to be rendered
5.Header stylings (headerStyle to style the box of header, headertintcolor for color of header text
headertitlestyle for style of header text, headertitle and headerright takes an arrow function and 
return some component)
6.Tab Styling ( tabbarstyle bg color , tabbaractivetintcolor , tabbarinactivetintcolor)
7.tabBarIcon ( takes an arrow function props are (focused , size, color) , returns an icon (<Iconicons>) for vector-icons
here you can set the icon using route.name and also depending on its focused state.
)
8.Drawer Navigation (similar to other navigations , we pass useLegacyImplementation as props for performance)
9.We can Nest navigations by creating component of child navigator and passing this component as screen to parent navigator
*/

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // 👈 import icon set

import Login from "./components/Login";
import MenuItems from "./components/SectionList";
import WelcomeScreen from "./components/WelcomeScreen";
import Form from "./components/TextInput";
import MenuItemsFlat from "./components/FlatList";
import logo from "./img/image.png";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route }) => ({
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
          tabBarStyle: { backgroundColor: "#ffffff" },
          tabBarActiveTintColor: "#EE9972",
          tabBarInactiveTintColor: "#444444",

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Welcome":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Login":
                iconName = focused ? "log-in" : "log-in-outline";
                break;
              case "Feedback":
                iconName = focused ? "chatbubble" : "chatbubble-outline";
                break;
              case "ListMenu":
                iconName = focused ? "list" : "list-outline";
                break;
              case "SectionMenu":
                iconName = focused ? "grid" : "grid-outline";
                break;
              default:
                iconName = "ellipse-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Welcome"
          options={{ title: "Home", headerShown: false }}
          component={WelcomeScreen}
        />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Feedback" component={Form} />
        <Tab.Screen
          name="ListMenu"
          options={{ title: "Flat Menu" }}
          component={MenuItemsFlat}
        />
        <Tab.Screen
          name="SectionMenu"
          options={{ title: "Section Menu" }}
          component={MenuItems}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
