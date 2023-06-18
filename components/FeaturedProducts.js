import { StyleSheet, View } from "react-native";
import Text from "./Text";
import colors from "../config/colors";

export default function FeaturedProducts({ title, isLoad, children }) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.group}>
        {children}
        {isLoad && <Text style={styles.load}>Load more...</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 40,
    marginTop: 7,
  },
  title: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  group: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  load: {
    fontSize: 15,
    width: 100,
    marginHorizontal: "38%",
    color: colors.medium,
  },
});
