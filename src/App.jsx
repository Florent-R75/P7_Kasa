import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  Router
import Homepage from "./pages/Homepage";
import Housing from "./pages/Housing";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
// Global components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Styles
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="housing/:id" element={<Housing />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
