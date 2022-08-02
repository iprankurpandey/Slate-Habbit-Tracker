import { Link, useNavigate } from "../../Utils/SystemUtils";
import { useAuthContext } from "../../Context/IndexAllContext";
import { signUpHandler } from "../../Services/AuthServices";

function Signup() {
  const { dispatch, name, email, password } = useAuthContext();
  const navigate = useNavigate();
  function submitSignUpData(e) {
    signUpHandler(e, name, email, password);
    navigate("/Login");
  }
  return (
    <div>
      <h2 className="text-center text-3xl mt-28">Signup Page</h2>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900 text-center">
              Build Habits that rewards you .
            </h1>
            <p class="leading-relaxed mt-4 text-center">
              Use your credentials to Signup.
            </p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full ">
            <h2 class="text-gray-900 text-lg font-medium title-font">
              Sign Up
            </h2>
            <form onSubmit={submitSignUpData}>
              <div class="relative">
                <label for="full-name" class="text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={(e) =>
                    dispatch({ type: "NAME", payload: e.target.value })
                  }
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative">
                <label for="email" class=" text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  onChange={(e) =>
                    dispatch({ type: "EMAIL", payload: e.target.value })
                  }
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div class="relative mb-4">
                <label for="email" class="text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  inputMode="numeric"
                  name="pasword"
                  onChange={(e) =>
                    dispatch({ type: "PASSWORD", payload: e.target.value })
                  }
                  required
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <input
                type="submit"
                value="SignUp"
                class="text-white cursor-pointer bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              />
            </form>

            <p class="text-xs text-gray-500 mt-3">
              If already joined ,{" "}
              <Link to="/Login">
                <strong>Login </strong>!
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
