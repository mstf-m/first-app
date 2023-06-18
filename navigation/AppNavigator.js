import HomeNavigator from "./HomeNavigator";
import CategoriesNavigator from "./CategoriesNavigator";
import CartNavigator from "./CartNavigator";
import AccountNavigator from "./AccountNavigator";

import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "HomeTab") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "CategoriesTab") {
          iconName = focused ? "apps" : "apps-outline";
        } else if (route.name === "CartTab") {
          iconName = focused ? "md-cart" : "md-cart-outline";
        } else if (route.name === "AccountTab") {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.selectedViolet,
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeNavigator} />
    <Tab.Screen name="CategoriesTab" component={CategoriesNavigator} />
    <Tab.Screen name="CartTab" component={CartNavigator} />
    <Tab.Screen name="AccountTab" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
