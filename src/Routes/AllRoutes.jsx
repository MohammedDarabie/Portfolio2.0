import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Work from "../Pages/Work/Work";
import Connect from "../Pages/LetConnect/LetsConnect";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/letsconnect" element={<Connect />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
