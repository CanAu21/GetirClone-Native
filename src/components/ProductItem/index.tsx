import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type productItemType = {
  item: Product;
};

const index = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.28,
        height: height * 0.24,
        marginTop: 12,
        marginLeft: 12,
        marginBottom: 6,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.2,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 13, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "500",
        }}
      >
        {item.miktar}
      </Text>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgray",
          backgroundColor: "white",
          position: "absolute",
          right: -2,
          top: -6,
          borderRadius: 6,
          shadowRadius: 3.8,
          shadowOpacity: 0.08,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default index;
