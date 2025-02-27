import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { About } from "./pages/About";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";
// import useBreakpoint from "./hooks/useBreakpoint";
import { Product } from "./pages/Product";
import { InProgress } from "./pages/InProgress";

function App() {
  // const { isDesktop } = useBreakpoint();

  return (
    <Router>
      <Header />
      <main className="mx-auto my-0 flex w-full max-w-[1440px] flex-col gap-[100px] px-[40px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/product/:productId" element={<Product />} />

          <Route path="*" element={<InProgress />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
