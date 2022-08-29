import React from "react";
import { useParams } from "react-router-dom";
import ButtonHome from "../components/ButtonHome";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const {
    id,
    product_name,
    categories,
    ingredients_text,
    allergens_imported,
    image_url,
  } = useParams();

  return (
    <>
      <ButtonHome />
      <ProductDetails
        productName={product_name}
        categories={categories}
        ingredientsText={ingredients_text}
        allergensImported={allergens_imported}
        id={id}
        imageUrl={image_url}
      />
    </>
  );
};

export default Product;
