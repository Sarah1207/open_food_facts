import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Navigation />
        </Layout>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
