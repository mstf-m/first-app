import { StyleSheet, View, Image, FlatList } from "react-native";
import defaultStyles from "../config/styles";
import Text from "./Text";

const data = [
  { id: 1, title: "Apparel", url: require("../assets/L1.png"), target: "" },
  { id: 2, title: "School", url: require("../assets/L2.png"), target: "" },
  { id: 3, title: "Sports", url: require("../assets/L3.png"), target: "" },
  { id: 4, title: "Electronic", url: require("../assets/L4.png"), target: "" },
  { id: 5, title: "All", url: require("../assets/L5.png"), target: "" },
];

export default function CategoryNav() {
  return (
    <View style={[styles.container]}>
      <Text>Category</Text>
      <View style={styles.group}>
        {data.map((item) => (
          <View key={item.id} style={[styles.item]}>
            <Image source={item.url} style={[styles.image]}></Image>
            <Text style={[styles.title]}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginBottom: 25,
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    color: defaultStyles.colors.medium,
    fontSize: 14,
  },
});
