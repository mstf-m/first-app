import Screen from "../components/Screen";
import { ScrollView, StyleSheet } from "react-native";
import Text from "../components/Text";
import colors from "../config/colors";
import TextInput from "../components/TextInput";
import FeaturedProducts from "../components/FeaturedProducts";
import CardC from "../components/CardC";

const categories = [
  {
    id: 1,
    url: require("../assets/c1.jpg"),
    name: "Monitor LG 22inc 4K",
    price: "(870)",
  },
  {
    id: 2,
    url: require("../assets/c2.webp"),
    name: "Monitor LG 22inc 4K",
    price: "(910)",
  },
  {
    id: 3,
    url: require("../assets/c3.jpg"),
    name: "Monitor LG 22inc 4K",
    price: "(540)",
  },
  {
    id: 4,
    url: require("../assets/c4.webp"),
    name: "Monitor LG 22inc 4K",
    price: "(309)",
  },
  {
    id: 5,
    url: require("../assets/c5.webp"),
    name: "Monitor LG 22inc 4K",
    price: "(309)",
  },
  {
    id: 6,
    url: require("../assets/c6.webp"),
    name: "Monitor LG 22inc 4K",
    price: "(309)",
  },
  {
    id: 7,
    url: require("../assets/c7.webp"),
    name: "Monitor LG 22inc 4K",
    price: "(309)",
  },
  {
    id: 8,
    url: require("../assets/c8.jpg"),
    name: "Monitor LG 22inc 4K",
    price: "(309)",
  },
];

export default function CategoriesScreen() {
  return (
    <Screen>
      <ScrollView>
        <Text style={styles.title}>Categories</Text>
        <TextInput icon={"search1"} placeholder="Search here"></TextInput>
        <FeaturedProducts data={categories}>
          {categories.map((item) => (
            <CardC key={item.id} data={item}></CardC>
          ))}
        </FeaturedProducts>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: "bold",
    marginTop: 70,
    marginLeft: 20,
    marginBottom: 20,
  },
});
