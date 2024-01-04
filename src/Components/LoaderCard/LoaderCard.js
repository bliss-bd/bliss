import React from 'react';

const LoaderCard = () => {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-full animate-pulse bg-gray-400 w-full object-cover object-center"></div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-full bg-gray-400 animate-pulse w-full object-cover object-center"></div>

                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-[480px] bg-gray-400 md:h-36 w-full object-cover object-center"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default LoaderCard;