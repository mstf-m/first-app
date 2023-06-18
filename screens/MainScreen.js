import TextInput from "../components/TextInput";
import Screen from "../components/Screen";
import Carousel from "../components/Carousel";
import CategoryNav from "../components/CategoryNav";
import FeaturedProducts from "../components/FeaturedProducts";
import { ScrollView, FlatList, Text } from "react-native";
import CardA from "../components/CardA";

const recentProducts = [
  {
    id: 1,
    url: require("../assets/img.png"),
    name: "Monitor LG 22inc 4K",
    price: "$300",
  },
  {
    id: 2,
    url: require("../assets/img1.png"),
    name: "Monitor LG 22inc 4K",
    price: "$300",
  },
  {
    id: 3,
    url: require("../assets/img2.png"),
    name: "Monitor LG 22inc 4K",
    price: "$300",
  },
  {
    id: 4,
    url: require("../assets/img3.png"),
    name: "Monitor LG 22inc 4K",
    price: "$300",
  },
];

const popularProducts = [
  {
    id: 1,
    url: require("../assets/img4.png"),
    name: "Aestechic Mug -white",
    price: "$199",
  },
  {
    id: 2,
    url: require("../assets/img5.png"),
    name: "Aestechic Mug -white",
    price: "$199",
  },
  {
    id: 3,
    url: require("../assets/img6.png"),
    name: "Aestechic Mug -white",
    price: "$199",
  },
  {
    id: 4,
    url: require("../assets/img7.png"),
    name: "Aestechic Mug -white",
    price: "$199",
  },
];

export default function MainScreen() {
  return (
    <Screen>
      <FlatList
        data={[""]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => (
          <>
            <TextInput icon={"search1"} placeholder="Search here" />
            <Carousel />
            <CategoryNav />

            <FeaturedProducts title="Recent Products" isLoad={true}>
              {recentProducts.map((item) => (
                <CardA key={item.id} data={item}></CardA>
              ))}
            </FeaturedProducts>
            <FeaturedProducts
              title="Popular Products"
              data={popularProducts}
              isButton={true}
              isLoad={true}
            >
              {popularProducts.map((item) => (
                <CardA key={item.id} data={item}></CardA>
              ))}
            </FeaturedProducts>
          </>
        )}
      />
    </Screen>
  );
}
