import Screen from "../components/Screen";
import { ScrollView, StyleSheet, View, FlatList, Image } from "react-native";
import Text from "../components/Text";
import colors from "../config/colors";
import Button from "../components/Button";
import Icon from "../components/Icon";
import SeparatorLine from "../components/SeparatorLine";
import AcountSection from "../components/AcountSection";

const profile = {
  imageUrl: require("../assets/profilePic.jpg"),
  profileName: "Mahdi Ali",
  email: "Mahde@Ali.com",
};

const sections = [
  {
    title: "General",
    items: ["Edit Profile", "Notifications", "Wishlist"],
  },
  {
    title: "Legal",
    items: ["Terms of Use", "Privacy Policy"],
  },
  {
    title: "Personal",
    items: ["Report a Bug", "Logout"],
  },
];

export default function CategoryScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <Button
          style={styles.button}
          title={<Icon name="back" iconColor={colors.dark} size={50}></Icon>}
        ></Button>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={profile.imageUrl}></Image>
        <View style={styles.info}>
          <Text style={styles.profileName}>{profile.profileName}</Text>
          <Text style={styles.email}>{profile.email}</Text>
        </View>
      </View>
      <SeparatorLine></SeparatorLine>
      {sections.map((item) => (
        <AcountSection data={item}></AcountSection>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: "bold",
    marginLeft: "25%",
  },
  profileContainer: {
    marginHorizontal: 30,
    flexDirection: "row",
    marginBottom: 30,
  },
  image: {
    borderRadius: 50,
    width: 85,
    height: 85,
  },
  info: {
    justifyContent: "center",
    marginLeft: 20,
  },
  profileName: {
    fontSize: 17,
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: colors.medium,
  },
});
