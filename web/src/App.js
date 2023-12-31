import { Route, Routes } from "react-router-dom";
import Home from "./Templates/Home";
import Intake from "./Templates/Intake";
import Order from "./Templates/Order";
import Document from "./Components/Document";
import LoginPage from "./Templates/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/intake" element={<Intake />} />
      <Route path="/order" element={<Order />} />
      <Route path="/document/:id" element={<Document />} />
    </Routes>
  );
}

export default App;
