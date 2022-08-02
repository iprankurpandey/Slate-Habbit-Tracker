import React from "react";
import { Toaster } from "react-hot-toast";
import App from "./App";
import {
  HabitContext,
  LoginSignupContext,
  LabelContext,
} from "./Context/IndexAllContext";

function Pages() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <LoginSignupContext>
        <HabitContext>
          <LabelContext>
            <App />
          </LabelContext>
        </HabitContext>
      </LoginSignupContext>
    </div>
  );
}

export default Pages;
