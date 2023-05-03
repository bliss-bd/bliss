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
                    className="w-full flex justify-center bg-black border-2 border-lime-500 hover:border-black hover:bg-lime-500 text-lime-500 hover:text-black p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Back to home
                  </Link>
                </div>
            </div>

        </div>
    );
};

export default Error;