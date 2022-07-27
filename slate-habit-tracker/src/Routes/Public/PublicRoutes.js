import React from "react";
import {
  Homepage,
  Loginpage,
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
      </Routes>
    </div>
  );
}

export default PublicRoutes;
