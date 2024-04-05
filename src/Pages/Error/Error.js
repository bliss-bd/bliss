import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">

                    <iframe style={{ border: "none", height: "500px" }} src="https://rive.app/community/2686-5508-koneksi-terputus/embed" allowfullscreen ></iframe>
                    <h1
                        className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Uh-oh!
                    </h1>

                    <p className="my-4 text-gray-500">We can't find that page.</p>
                    <Link
                    to='/'
                    className="w-full flex justify-center bg-[#1b1b1b] border-2 border-[#a6adbb] hover:border-black hover:bg-white text-white hover:text-black p-4  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Back to home
                  </Link>
                </div>
            </div>

        </div>
    );
};

export default Error;