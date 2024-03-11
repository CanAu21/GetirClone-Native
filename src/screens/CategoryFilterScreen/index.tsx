import { ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFilterin from "../../components/CategoryFilterin";
import { Category } from "../../models";

const index = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );

  return (
    <ScrollView>
      <CategoryFilterin category={category} />
    </ScrollView>
  );
};

export default index;
