import React, { useContext, useState } from "react";
import "./Form.css";
import { FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [error, setError] = useState(null);

  const { googleLogin, register, updateUserProfile } = useContext(userContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // const type = form.type.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }
    if (password.length < 6) {
      setError("Your Password should be 6 characters or more");
      return;
    }

    register(email, password)
      .then((result) => {
        const user = result.user;
        if (user?.uid) {
          handleupdateUser(name);

          saveUser(name, email, user?.photoURL);
          toast.success("Account Created Successfully!", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          form.reset();
          navigate(from, { replace: true });
        }
      })
      .then((error) => console.error(error));
  };

  const handleupdateUser = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email, photoURL) => {
    const user = { name, email, photoURL };
    fetch("https://bliss-server-y2j1.vercel.app/users ", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {;
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          toast.success("SignIn Successful");
          navigate(from, { replace: true });
        }
        saveUser(user.displayName, user.email, user?.photoURL);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="relative max-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto w-full bg-white">
          <div className="md:flex md:items-center md:justify-center  md:h-full w-full lg:w-4/12 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <div className="px-auto mx-auto ">
                  <iframe
                    className="px-auto mx-auto"
                    src="https://embed.lottiefiles.com/animation/28497"
                  ></iframe>
                </div>
                <p className="mt-2 text-sm text-gray-500">Please sign up</p>
              </div>
              <div className="flex flex-row justify-center items-center space-x-3">
                <FaFacebookSquare className="w-10 h-10 text-blue-700 cursor-pointer"></FaFacebookSquare>
                <FaGooglePlus
                  onClick={handleGoogleLogin}
                  className="w-10 h-10 text-red-700 cursor-pointer"
                ></FaGooglePlus>
              </div>
              <div className="flex items-center  justify-center space-x-2">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="text-gray-300 font-normal">or continue with</span>
                <span className="h-px w-16 bg-gray-200"></span>
              </div>
              <form onSubmit={handleSingUp} className="mt-8 space-y-6">
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Name</label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-lime-500"
                    type="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="relative">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-lime-500"
                    type="email"
                    name="email"
                    placeholder="Email@gmail.com"
                  />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-lime-500"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="my-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Confirm Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-lime-500"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                </div>
                <div>
                  <p className="text-red-500">{error}</p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-black border-2 border-lime-500 hover:border-black hover:bg-lime-500 text-lime-500 hover:text-black p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Sign up
                  </button>
                </div>
                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <Link
                    to="/signin"
                    className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="w-full  lg:w-7/12  h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-gray-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-l to-black  from-lime-300 opacity-75 inset-0 z-0"></div>
            <div className="w-full mx-auto max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Reference site about Lorem Ipsum..
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s when an unknown printer took a galley of type and scrambled it to make a type
                specimen book it has?
              </div>
            </div>
            {/* <!---remove custom style--> */}
            <ul className="circles">
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
