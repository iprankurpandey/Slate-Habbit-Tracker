import React from "react";
import {
  Addhabitspage,
  Dashboardpage,
  Homepage,
  Loginpage,
  Managehabitspage,
  Settingspage,
  Signuppage,
  Welcomepage,
} from "../../Pages/IndexAllPages";
import { Route, Routes } from "../../Utils/SystemUtils";

function PublicRoutes() {
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

export default PublicRoutes;
