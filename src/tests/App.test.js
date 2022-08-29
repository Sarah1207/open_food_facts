import { render, screen } from "@testing-library/react";
import ButtonHome from "../components/ButtonHome";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import PlaceholderImg from "../components/PlaceholderImg";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import SearchInput from "../components/SearchInput";
import Error from "../views/Error";
import Home from "../views/Home";
import Product from "../views/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

describe("<App/>", () => {
  it('should renders the App with the Search Input Component that contains a role"search"', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const element = screen.getByRole("search");
    expect(element).toBeInTheDocument();
  });

  it("'should renders the App with the Navigation Component that contains a data-testid 'router'", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    const element = screen.getByTestId("router");
    expect(element).toBeInTheDocument();
  });

  it("should renders the component ProductCard with the data-testid 'productCard'", () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<ProductCard />} />
        </Routes>
      </Router>
    );
    const element = screen.getByTestId("productCard");
    expect(element).toBeInTheDocument();
  });

  it("should renders the component ProductCard with a link that contains a role 'link'", () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<ProductCard />} />
        </Routes>
      </Router>
    );
    const element = screen.getByRole("link");
    expect(element).toBeInTheDocument();
  });

  it("should renders the component ProductDatails with the data-testid 'productDetails'", () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<ProductDetails />} />
        </Routes>
      </Router>
    );
    const element = screen.getByTestId("productDetails");
    expect(element).toBeInTheDocument();
  });
});

describe("<Layout/>", () => {
  it('should render the component with the data-testid "layout"', () => {
    render(<Layout />);
    const element = screen.getByTestId("layout");
    expect(element).toBeInTheDocument();
  });
});

describe("<Loader/>", () => {
  it('should render the test id "loader', () => {
    render(<Loader />);
    const element = screen.getByTestId("loader");
    expect(element).toBeInTheDocument();
  });
});

describe("<PlaceHolderImg/>", () => {
  it("should renders <PlaceHolderImg component with the data-testid 'placeholder'", () => {
    render(<PlaceholderImg />);
    const element = screen.getByTestId("placeholder");
    expect(element).toBeInTheDocument();
  });
});

describe("<SearchInput/>", () => {
  it("should renders the role search", () => {
    render(<SearchInput />);
    const element = screen.getByRole("search");
    expect(element).toBeInTheDocument();
  });
});

describe("<Error />", () => {
  it("should renders <ButtonHome /> Component with the role button", () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
    const element = screen.getByRole("link");
    expect(element).toBeInTheDocument();
  });

  it("should renders the alt text 'error' in the <Error /> Component", () => {
    render(
      <Router>
        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
    const element = screen.getByAltText("error");
    expect(element).toBeInTheDocument();
  });
});
