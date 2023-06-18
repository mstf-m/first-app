import Screen from "../components/Screen";
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Text from "../components/Text";
import colors from "../config/colors";
import CardCart from "../components/CardCart";
import Icon from "../components/Icon";
import Button from "../components/Button";
import { ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import { useState } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableHighlight } from "react-native-gesture-handler";

const categoryData = {
  cartProducts: [
    {
      id: 1,
      url: require("../assets/img1.png"),
      title: "Boston Lettuce",
      price: "1.10 $",
      count: "3",
    },
    {
      id: 2,
      url: require("../assets/img6.png"),
      title: "Boston Lettuce",
      price: "1.10 $",
      count: "2",
    },
  ],
};

export default function CategoryScreen() {
  const [messages, setMessages] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    console.log("first");
  };

  return (
    <Screen>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Button
              style={styles.button}
              title={
                <Icon name="back" iconColor={colors.dark} size={50}></Icon>
              }
            ></Button>
            <Text style={styles.title}>Shopping Cart</Text>
            <Button
              style={styles.button}
              title={
                <Icon name="delete" iconColor={colors.dark} size={50}></Icon>
              }
            ></Button>
          </View>
        }
        data={categoryData.cartProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "red",
                    width: 100,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff" }}>Delete</Text>
                </View>
              </TouchableOpacity>
            )}
          >
            <TouchableOpacity underlayColor={colors.light}>
              <CardCart data={item} />
            </TouchableOpacity>
          </Swipeable>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([{}]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: "bold",
  },
});
