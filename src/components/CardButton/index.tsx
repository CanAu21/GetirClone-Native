import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const index = () => {
  return (
    <TouchableOpacity
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

export default index;
