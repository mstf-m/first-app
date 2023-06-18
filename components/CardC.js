import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./Text";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";

export default function CardC({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(routes.CATEGORY)}
    >
      <Image source={data.url} style={styles.image}></Image>
      <View style={styles.details}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48.5%",
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: colors.white,
    overflow: "hidden",
    elevation: 2,
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  details: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    color: colors.textPrimary,
    marginBottom: 5,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: colors.medium,
  },
});
