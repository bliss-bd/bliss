import React, { useContext,useState } from "react";
import "../SignUp/Form.css";
import { FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState('')

  const { googleLogin, signInUser,forgetPassword } = useContext(userContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSigninUser = (event) => {
      event.preventDefault()
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signInUser(email, password)
          .then(result => {
              const user = result.user
              if (user.uid) {
                  toast.success('Successfully Sign In')
                  form.reset()
                  navigate(from, { replace: true });
              }
          })
          .then(error => console.error(error))
  }

  // const saveUser = (name, email, type = 'Buyer') => {
  //     const user = { name, email, role: type };
  //     fetch('https://xtocky-cycle-server.vercel.app/users', {
  //         method: "POST",
  //         headers: {
  //             'content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //     })
  //         .then(res => res.json())
  //         .then(data => {
  //             console.log(data)
  //         })
  // }

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user.uid) {
          toast.success("Login Successful");
          navigate(from, { replace: true });
        }
        // saveUser(user.displayName, user.email, user?.photoURL)
      })
      .catch((error) => console.log(error));
  };


  
  const recoverPassword = () => {
    forgetPassword(email)
        .then(() => {
          toast.success('Password reset email sent!', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
        })
        .catch(error => console.log(error))
}



  return (
    <div>
      <div class="relative max-h-screen flex">
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
                <FaGooglePlus onClick={handleGoogleLogin} className="w-10 h-10 text-red-700 cursor-pointer"></FaGooglePlus>
              </div>
              <div class="flex items-center justify-center space-x-2">
                <span class="h-px w-16 bg-gray-200"></span>
                <span class="text-gray-300 font-normal">or continue with</span>
                <span class="h-px w-16 bg-gray-200"></span>
              </div>
              <form onSubmit={handleSigninUser} class="mt-8 space-y-6" action="#" method="POST">
              <div class="relative">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input
                    onBlur={(e) => setEmail(e.target.value)}
                    class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-lime-500"
                    type="email"
                    name="email"
                    placeholder="Email@gmail.com"
                  />
                </div>
                <div class="mt-8 content-center">
                  <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Password</label>
                  <input
                    class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-lime-500"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center"></div>
                  <div class="text-sm" onClick={recoverPassword}>
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
                    Sign In
                  </button>
                </div>
                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span>Don't have an account?</span>
                  <Link
                    to="/signup"
                    class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                  >
                    Sign Up
                  </Link>
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

export default SignIn;
