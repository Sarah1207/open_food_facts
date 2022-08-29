import { useState } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";
import useProductsList from "../utils/useProductList";

const Home = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useProductsList();

  const handleChange = (e) => {
    e.preventDefault();
    const searchedWord = e.target.value;
    setQuery(searchedWord);
  };

  return (
    <>
      <SearchInput
        value={query}
        handleChange={handleChange}
        placeholder="Type your search..."
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="products__list__container">
          {data.products
            .filter((product) =>
              product.product_name.toLowerCase().includes(query.toLowerCase())
            )
            .map((product) => {
              return (
                <>
                  <ProductCard
                    key={product._id}
                    productName={product.product_name}
                    productImgCard={product.image_front_small_url}
                    productId={product._id}
                    productCategories={product.categories}
                    productIngredientsText={product.ingredients_text}
                    productAllergensImported={product.allergens_imported}
                    imageUrl={product.image_front_url}
                  />
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;
