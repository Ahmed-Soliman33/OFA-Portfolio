import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./Pages/PortfolioPage";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio/:id" element={<PortfolioPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
