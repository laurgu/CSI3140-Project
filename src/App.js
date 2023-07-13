import{
  Routes,
  Route
}from 'react-router-dom'
import Home from './Templates/Home'
import Intake from './Templates/Intake'
function App() {
  return (
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/intake" element={<Intake />} />
    </Routes>
  );
}

export default App;
