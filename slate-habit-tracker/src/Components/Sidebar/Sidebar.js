import { Link, useNavigate } from "../../Utils/SystemUtils";
import { logoutHandler } from "../../Services/AuthServices";

function Sidebar() {
  const navigate = useNavigate();
  function logOutUserFromApp() {
    logoutHandler();
    navigate("/");
    window.location.reload();
  }
  return (
    <div>
      <div class="w-70 shadow-md bg-white px-9 font-bold  fixed left-0 mt-16 h-screen  top-0">
        <div className="flex flex-col h-auto w-40">
          <Link to="/Dashboard">
            <div className="flex  justify-between items-center mt-10">
              <span class="material-icons">dashboard</span>
              Dashboard
            </div>
          </Link>
          <Link to="/Addhabits">
            <div className="flex  justify-between items- mt-4">
              <span class="material-icons">add</span>
              Add Habit
            </div>
          </Link>
          <Link to="/Managehabits">
            <div className="flex  justify-between items-center mt-4">
              <span class="material-icons">list</span>
              Manage Habit
            </div>
          </Link>
          <Link to="/Archives">
            <div className="flex  justify-between items-center mt-4">
              <span class="material-icons">archive</span>
              Archive
            </div>
          </Link>

          <div className="flex cursor-pointer justify-between items-center mt-4">
            <span class="material-icons" onClick={logOutUserFromApp}>
              logout
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
