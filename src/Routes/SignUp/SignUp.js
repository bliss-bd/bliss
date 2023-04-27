import React from "react";
import "./Form.css";
import logo1 from "../../assets/Bliss LOGO- Ontor[1].png";
import { FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import wave from "../../assets/wave-haikei (4).svg";

const SignUp = () => {
  return (
    <div>
      <div class="relative max-h-screen flex ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto w-full bg-white">
          <div class="md:flex md:items-center md:justify-center  md:h-full w-full lg:w-4/12 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div class="max-w-md w-full space-y-8">
              <div class="text-center">
                <div class="lg:pl-20 mx-auto ">
                  <iframe src="https://embed.lottiefiles.com/animation/28497"></iframe>
                </div>
                <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
              </div>
              <div class="flex flex-row justify-center items-center space-x-3">
                <FaFacebookSquare className="w-10 h-10 text-blue-700 cursor-pointer"></FaFacebookSquare>
                <FaGooglePlus className="w-10 h-10 text-red-700 cursor-pointer"></FaGooglePlus>
              </div>
              <div class="flex items-center justify-center space-x-2">
                <span class="h-px w-16 bg-gray-200"></span>
                <span class="text-gray-300 font-normal">or continue with</span>
                <span class="h-px w-16 bg-gray-200"></span>
              </div>
              <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input
                    class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-lime-500"
                    type=""
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div class="mt-8 content-center">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-lime-500"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center"></div>
                  <div class="text-sm">
                    <a href="#" class="text-indigo-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full flex justify-center bg-black border-2 border-lime-500 hover:border-black hover:bg-lime-500 text-lime-500 hover:text-black p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <a
                    href="#"
                    class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div class="w-full  lg:w-7/12  h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-gray-900 text-white bg-no-repeat bg-cover relative">
            <div class="absolute bg-gradient-to-b to-black  from-lime-300 opacity-75 inset-0 z-0"></div>
            <div class="w-full mx-auto max-w-md z-10">
              <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Reference site about Lorem Ipsum..
              </div>
              <div class="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s when an unknown printer took a galley of type and scrambled it to make a type
                specimen book it has?
              </div>
            </div>
            {/* <!---remove custom style--> */}
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
