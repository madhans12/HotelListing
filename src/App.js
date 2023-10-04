import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hotel from "./Hotel";
import HotelNav from "./HotelNav";
import Hotel1 from "./Hotel1";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Featured List Property</h1>
        <p>
          Real estate can be brought, sold, leased or rented and can be a <br />
          valuable investment opportunity.the value of real estate can be ...
        </p>
      </div>
      <div className="nav1">
        <HotelNav />
      </div>
      <Routes>
        <Route path="/" element={<Hotel />}></Route>
        <Route path="/london" element={<Hotel1 />}></Route>
        <Route path="/newyork" element={<Hotel />}></Route>
        <Route path="/chicago" element={<Hotel1 />}></Route>
        <Route path="/texas" element={<Hotel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
