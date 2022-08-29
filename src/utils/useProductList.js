import axios from "axios";
import { useQuery } from "react-query";

const useProductsList = () => {
  return useQuery("products", async () => {
    const { data } = await axios.get(
      "https://world.openfoodfacts.org?json=true"
    );
    return data;
  });
};

export default useProductsList;
