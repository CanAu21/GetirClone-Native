import React, { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};

const CartItem = ({ product, quantity, removeFromCart }: CartItemProps) => {
  const [count, setCount] = useState(quantity);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          flex: 1,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderRadius: 8,
              borderWidth: 0.45,
              borderColor: "lightgray",
              padding: 4,
            }}
          >
            <Image
              style={{
                height: height * 0.09,
                width: height * 0.09,
              }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 13,
                  maxWidth: width * 0.44,
                }}
              >
                {product.name}
              </Text>
              <Text
                style={{
                  color: "#848897",
                  fontWeight: "600",
                  fontSize: 12,
                  marginTop: 3,
                }}
              >
                {product.miktar}
              </Text>
              <Text
                style={{
                  color: "#5D3EBD",
                  fontWeight: "bold",
                  fontSize: 14,
                  marginTop: 6,
                }}
              >
                <Text>{"\u20BA"}</Text>
                {product.fiyat}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: width * 0.22,
            height: height * 0.04,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderWidth: 0.5,
            borderColor: "lightgrey",
            shadowOpacity: 0.4,
            shadowColor: "gray",
          }}
        >
          <TouchableOpacity
            onPress={() => decreaseCount()}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#5D3EBD",
              }}
            >
              -
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              backgroundColor: "#5D3EBD",
              height: height * 0.04,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              {count}
            </Text>
          </View>

          <TouchableOpacity
            onPress={increaseCount}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#5D3EBD",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
