import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";

const index = (props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }
  return (
    <View>
      <ImageCarousel images={product?.images} />
    </View>
  );
};

export default index;
