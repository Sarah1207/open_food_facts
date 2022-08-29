import React from "react";
import PlaceholderImg from "./PlaceholderImg";

const ProductDetails = ({
  productName,
  categories,
  ingredientsText,
  allergensImported,
  imageUrl,
}) => {
  return (
    <div className="product__details__container" data-testid="productDetails">
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
        <h2>{productName.replace(/%20/g, ` `)}</h2>
        {categories && (
          <p>
            <span className="title">Catégories</span> {categories.replace(/%20/g, ` `)}
          </p>
        )}

        {ingredientsText && (
          <p>
            <span className="title">Ingrédients</span>
            {ingredientsText.replace(/%20/g, ` `)}
          </p>
        )}

        {allergensImported && (
          <p>
            <span className="title">Allergènes</span> {allergensImported.replace(/%20/g, ` `)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
