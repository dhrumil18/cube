import React from "react";
import CustomerList from "./components/CustomerList";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CustomerList />
    </>
  );
};

export default App;
