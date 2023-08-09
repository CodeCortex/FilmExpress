import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpsent, setOtpsent] = useState(false);
  const [OTP, SetOTP] = useState("");

  

  return (
    <div className="w-full flex flex-col mt-10 justify-center items-center">
      <h1 className="text-xl font-bold">Sign Up</h1>

      {otpsent ? (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="number" class="leading-7 text-sm text-gray-300">
                OTP
              </label>
              <input
                id="OTP"
                name="OTP"
                value={OTP}
                onChange={(e) => SetOTP(e.target.value)}
                class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Confirm OTP"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="number" class="leading-7 text-sm text-gray-300">
                Mobile No.
              </label>
              <input
                type={"number"}
                id="mobile"
                name="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Sign Up"}
            </button>
          </div>
        </>
      )}

      <div>
        <p>
          Already have account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-600">Login</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
