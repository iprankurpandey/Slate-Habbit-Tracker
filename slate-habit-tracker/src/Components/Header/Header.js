import { React, Link } from "../../Utils/SystemUtils";

function Header() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <header class="text-gray-600 body-font shadow-sm fixed top-0 w-full bg-white ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <span class="ml-3 text-2xl font-bold ">Slate Habit Tracker</span>

          {!token ? (
            <Link to="/login">
              <span className="material-icons">account_circle</span>
            </Link>
          ) : (
            <Link to="/AddHabits">
              <strong>{Date().toString().split("G")[0]}</strong>

              <button
                type="button"
                class="inline-block font-bold px-6 py-2.5 bg-blue-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add Habit
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
