import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages of Router
import Homepage from "./pages/Homepage";
import Room from "./pages/Room";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
// Import global components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Import Styles
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="room" element={<Room />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
