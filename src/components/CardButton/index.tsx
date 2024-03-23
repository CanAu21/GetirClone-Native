import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

const index = ({ item, addItemToCart }: cartButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={{
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: height * 0.11,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: height * 0.06,
          width: "90%",
          backgroundColor: "#5D39C1",
          marginHorizontal: "5%",
          marginTop: -10,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);
