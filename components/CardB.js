import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import Button from "./Button";
import colors from "../config/colors";
import Icon from "./Icon";
import { useState } from "react";

export default function CardB({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={data.url} style={styles.image}></Image>
      <View style={styles.details}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.priceBox}>
          <Text style={styles.price}>{data.price}</Text>
          <Text style={styles.unit}>{data.unit}</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button
            style={styles.button}
            title={<Icon iconColor={colors.textPrimary} name={"hearto"}></Icon>}
            color="white"
          ></Button>
          <Button
            style={styles.button}
            title={<Icon name={"shoppingcart"}></Icon>}
            color="buttonPrimary"
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 130,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    overflow: "hidden",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  image: {
    width: "50%",
    resizeMode: "cover",
  },
  details: {
    marginHorizontal: 18,
    marginVertical: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 5,
  },
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  unit: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 5,
  },
  buttonBox: {
    width: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  button: {
    borderColor: colors.textPrimary,
    borderWidth: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  heart: {
    color: colors.black,
  },
});
