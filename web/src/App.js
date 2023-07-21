import {Route, Routes} from "react-router-dom";
import Home from "./Templates/Home";
import Intake from "./Templates/Intake";
import Order from "./Templates/Order";
import Document from "./Components/Document";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/intake" element={<Intake/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/intake/:id" element={<Intake/>}/>
            <Route path="/order/:id" element={<Order/>}/>
            <Route path="/document/:id" element={<Document/>}/>
        </Routes>
    );
}

export default App;
