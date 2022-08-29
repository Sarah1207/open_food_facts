import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImg from "./PlaceholderImg";

const ProductCard = ({
  productName,
  productImgCard,
  productId,
  productCategories,
  productIngredientsText,
  productAllergensImported,
  imageUrl,
}) => {
  const imageEncoded = encodeURIComponent(imageUrl);

  return (
    <div className="product__card" data-testid="productCard">
      <div className="product__card__img__container">
        {productImgCard ? (
          <img
            src={productImgCard}
            alt={productName}
            className="product__card__img"
          />
        ) : (
          <PlaceholderImg />
        )}
      </div>

      <p className="product__card__name">{productName}</p>
      <Link
        role="link"
        to={`/product/${imageEncoded}/${productName}/${productCategories}/${productIngredientsText}/${productAllergensImported}/${productId}`}
        className="button"
      >
        See details
      </Link>
    </div>
  );
};

export default ProductCard;
