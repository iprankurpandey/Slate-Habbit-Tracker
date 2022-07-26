import { Route, Routes } from "./Utils/SystemUtils";
import "./App.css";
import {
  Homepage,
  Loginpage,
  Signuppage,
  Welcomepage,
} from "./Pages/IndexAllPages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
