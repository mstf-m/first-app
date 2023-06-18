import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import Text from "./Text";
import Button from "./Button";
import colors from "../config/colors";
import Icon from "./Icon";
import { useState } from "react";

export default function CardB({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableHighlight>
      <View style={styles.card}>
        <Image source={data.url} style={styles.image}></Image>
        <View style={styles.details}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>{data.price}</Text>
          <View style={styles.buttonBox}>
            <Button
              style={styles.button}
              title={<Icon iconColor={colors.dark} name={"minus"}></Icon>}
            ></Button>
            <Text>{data.count}</Text>
            <Button
              style={styles.button}
              title={<Icon iconColor={colors.dark} name={"plus"}></Icon>}
            ></Button>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 12,
    backgroundColor: colors.background,
    overflow: "hidden",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 8,
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
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  buttonBox: {
    width: "55%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    borderColor: colors.textPrimary,
    borderWidth: 0.2,
    padding: 0,
  },
});
