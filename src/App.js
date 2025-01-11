import "./index";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";
import GlobalStyle from "./Global";

function App() {
  return (
    <Router basename="/portfolio2v2">
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>        
            {/* all of the routes go here */}
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);