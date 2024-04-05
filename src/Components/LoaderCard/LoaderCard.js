import React from 'react';

const LoaderCard = () => {
    return (
        <div>
            <section className="text-gray-700 body-font">
                <div className="container px-5 lg:py-24 py-4 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-96 animate-pulse bg-gray-400  md:h-36 h-36 w-full object-cover object-center"></div>
                            </div>
                        </div>
                        <div className="p-4 w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-96 bg-gray-400 animate-pulse  md:h-36 h-36 w-full object-cover object-center"></div>

                            </div>
                        </div>
                        <div className="p-4 w-1/3">
                            <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                <div className="lg:h-96 bg-gray-400 animate-pulse  md:h-36 h-36 w-full object-cover object-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default LoaderCard;