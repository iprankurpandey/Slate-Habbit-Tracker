import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div class="w-60 h-full mt-16  shadow-md bg-white px-9  fixed left-0">
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
          <Link to="/Settings">
            <div className="flex  justify-between items-center mt-4">
              <span class="material-icons">settings</span>
              Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
