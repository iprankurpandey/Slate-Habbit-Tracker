import { Authentication } from "../../Components/IndexAllComponents";
import { Route, Routes } from "../../Utils/SystemUtils";
import {
  Loginpage,
  Signuppage,
  Welcomepage,
  Addhabitspage,
  Dashboardpage,
  Managehabitspage,
  Archivespage,
} from "../../Pages/IndexAllPages";

function PublicRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
        <Route exact path="/Login" element={<Loginpage />} />
        <Route exact path="/Archives" element={<Archivespage />} />

        <Route
          exact
          path="/Dashboard"
          element={
            <Authentication>
              <Dashboardpage />
            </Authentication>
          }
        />
        <Route
          exact
          path="/Addhabits"
          element={
            <Authentication>
              <Addhabitspage />
            </Authentication>
          }
        />

        <Route
          exact
          path="/Managehabits"
          element={
            <Authentication>
              <Managehabitspage />
            </Authentication>
          }
        />

        <Route exact path="/Signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default PublicRoutes;
