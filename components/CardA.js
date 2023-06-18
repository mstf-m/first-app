import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import Button from "./Button";
import colors from "../config/colors";

export default function CardA({ data }) {
  return (
    <View style={styles.card}>
      <Image source={data.url} style={styles.image}></Image>
      <View style={styles.details}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}</Text>
        <Button title={"Add to Cart"} color="buttonPrimary"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: colors.white,
    overflow: "hidden",
    elevation: 2,
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
    fontSize: 14,
    color: colors.medium,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
