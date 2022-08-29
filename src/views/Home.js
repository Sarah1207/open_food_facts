import { useState } from "react";
import SearchInput from "../components/SearchInput";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const searchedWord = e.target.value;
    setQuery(searchedWord);
  };

  return (
    <SearchInput
      value={query}
      handleChange={handleChange}
      placeholder="Type your search here"
    />
  );
};

export default Home;
