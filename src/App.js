import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
// import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
