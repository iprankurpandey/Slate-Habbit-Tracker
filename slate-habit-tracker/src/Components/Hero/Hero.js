import { React, Link } from "../../Utils/SystemUtils";

function Hero() {
  return (
    <div>
      <section class="text-gray-600 body-font mt-20 flex items-center justify-center p-4">
        <div class="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-8 object-cover object-center rounded"
            alt="hero"
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_activity_tracker_re_2lvv%20(1).svg"
          />
          <div class="text-center lg:w-1/2 w-full">
            <h1 class="title-font p-2 sm:text-3xl text-2xl mb-2 font-medium text-gray-900">
              Build Habits that rewards you .
            </h1>
            <p class="text-center p-2">
              Tailblocks is a habit tracking app that helps you build habits
              that rewards you.
            </p>
            <div class="flex justify-center p-2">
              <Link to="/Login">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
