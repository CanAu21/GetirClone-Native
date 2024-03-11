import { ScrollView, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const TypeBox = ({ item, active }: { item: string; active: string }) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.045,
          marginRight: 12,
        },
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 2 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const index = () => {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        backgroundColor: "white",
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Küllah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox item={item} active={category} />
        )
      )}
    </ScrollView>
  );
};

export default index;
