import { Routes, Route } from "react-router-dom";
import Home from "./Templates/Home";
import Intake from "./Templates/Intake";
import Order from "./Templates/Order";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intake" element={<Intake />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;
