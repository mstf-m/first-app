import Screen from "../components/Screen";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import Text from "../components/Text";
import colors from "../config/colors";
import TextInput from "../components/TextInput";
import CardB from "../components/CardB";

const categoryData = {
  mainTitle: "Vegetables",
  products: [
    {
      id: 1,
      url: require("../assets/Item2.png"),
      title: "Boston Lettuce",
      price: "1.10",
      unit: "$/piece",
    },
    {
      id: 2,
      url: require("../assets/Item1.png"),
      title: "Boston Lettuce",
      price: "1.10",
      unit: "$/piece",
    },
    {
      id: 3,
      url: require("../assets/Item3.png"),
      title: "Boston Lettuce",
      price: "1.10",
      unit: "$/piece",
    },
    {
      id: 4,
      url: require("../assets/Item4.png"),
      title: "Boston Lettuce",
      price: "1.10",
      unit: "$/piece",
    },
  ],
};

export default function CategoryScreen() {
  return (
    <Screen>
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>{categoryData.mainTitle}</Text>
            <TextInput icon={"search1"} placeholder="Search here"></TextInput>
          </View>
        }
        data={categoryData.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardB data={item}></CardB>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
  },
  header: {
    marginHorizontal: 0,
  },
  title: {
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: "bold",
    marginTop: 70,
    marginLeft: 20,
    marginBottom: 20,
  },
});
