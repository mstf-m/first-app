import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

const CategoriesNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Categories" component={CategoriesScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
  </Stack.Navigator>
);

export default CategoriesNavigator;
