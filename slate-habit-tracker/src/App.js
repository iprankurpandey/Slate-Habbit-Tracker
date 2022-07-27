import { Route, Routes } from "./Utils/SystemUtils";
import "./App.css";
import {
  Homepage,
  Loginpage,
  Signuppage,
  Welcomepage,
  Addhabitspage,
  Settingspage,
  Dashboardpage,
  Managehabitspage,
} from "./Pages/IndexAllPages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Signup" element={<Signuppage />} />
        <Route path="/Addhabits" element={<Addhabitspage />} />
        <Route path="/Settings" element={<Settingspage />} />
        <Route path="/Dashboard" element={<Dashboardpage />} />
        <Route path="/Managehabits" element={<Managehabitspage />} />
      </Routes>
    </div>
  );
}

export default App;
