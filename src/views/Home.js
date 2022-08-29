import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import SearchInput from "../components/SearchInput";
import useProductsList from "../utils/useProductList";

const Home = () => {
  const { data, isLoading } = useProductsList();
  const [search, setSearch] = useSearchParams();

  const handleChange = (e) => {
    e.preventDefault();
    const searchedWord = e.target.value;
    setSearch({ product_name: searchedWord });
  };

  const searchByProductName = (product_name) => (product) =>
    product.product_name
      .toLowerCase()
      .includes((product_name || "").toLowerCase());

  return (
    <>
      <SearchInput
        value={search.get("product_name")}
        handleChange={handleChange}
        placeholder="Type your search..."
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="products__list__container"
          data-testid="productList"
          role="list"
        >
          {data.products
            .filter(searchByProductName(search.get("product_name")))
            .map((product) => {
              return (
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
              );
            })}
        </div>
      )}
    </>
  );
};

export default Home;
