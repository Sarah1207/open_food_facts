import React from "react";
import PlaceholderImg from "./PlaceholderImg";

function ProductDetails({
  productName,
  categories,
  ingredientsText,
  allergensImported,
  imageUrl,
}) {
  return (
    <div className="product__details__container">
      {imageUrl ? (
        <div className="product__details__img__container">
          <img
            src={imageUrl}
            alt={productName}
            className="product__details__img"
          />
        </div>
      ) : (
        <PlaceholderImg />
      )}

      <div className="product__details_text">
        <h2>{productName}</h2>
        {categories && (
          <p>
            <span className="title">Catégories</span> {categories}
          </p>
        )}

        {ingredientsText && (
          <p>
            <span className="title">Ingrédients</span> {ingredientsText}
          </p>
        )}

        {allergensImported && (
          <p>
            <span className="title">Allergènes</span> {allergensImported}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
