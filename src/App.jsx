import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import LibraryMap from "./pages/LibraryMap";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "20px",
          background: "#111827",
        }}
      >
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/map" style={{ color: "white", marginRight: "20px" }}>
          Library Map
        </Link>

        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<LibraryMap />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
