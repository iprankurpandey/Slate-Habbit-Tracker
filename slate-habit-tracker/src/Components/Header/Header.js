import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header class="text-gray-600 body-font shadow-sm fixed top-0 w-full ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <span class="ml-3 text-xl">Slate Habit Tracker</span>
          <span className="material-icons">account_circle</span>
        </div>
      </header>
    </div>
  );
}

export default Header;
