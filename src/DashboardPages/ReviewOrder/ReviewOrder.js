import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { TbCurrencyTaka } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ReviewOrder = () => {

    const [tnx, setTnx] = useState('')
    const handleTnxSet = (event) => {
        setTnx(event.target.value);
    };
    const data = useLoaderData();
    const { _id, name, email, phone, district, address, note, cartItems, subTotal, deliveryCharge, totalPrice } = data;

    const placeholder = data.tnxId ? 'TNX ID : ' + data?.tnxId : 'TNX ID';
    const handleUpdateOrder = (id) => {
        const confirm = window.confirm("Confirm As delivered order??");
        if (confirm) {
            fetch(`https://bliss-bd.vercel.app/delivered/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ status: true, tnx: tnx }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        toast.success("Mark as delivered successfully");
                    }
                });
        }
    };

    return (
        <div className="pb-14 px-4 md:px-6 lg:px-32 2xl:container 2xl:mx-auto">
            <div className="mb-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>


                        {cartItems?.map((cartItem) => (
                            <div key={cartItem._id} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                <div className="pb-4 md:pb-8  w-full md:w-40">
                                    <div>
                                        <div className="block overflow-hidden group">
                                            <img
                                                src={cartItem.picture}
                                                alt=""
                                                className="h-[270px] w-full object-cover transition rounded-md duration-300  md:h-[130px] lg:h-[125px] xl:h-[125px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{cartItem?.name}s</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">

                                            <p className="text-sm leading-none text-gray-800">
                                                <span className="text-gray-300">Size: </span> {cartItem?.size}
                                            </p>

                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base xl:text-lg leading-6 text-gray-800">Quantity : {cartItem?.quantity}</p>
                                        <p className="text-base xl:text-lg leading-6 flex items-center">
                                            {cartItem?.price} <TbCurrencyTaka></TbCurrencyTaka>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}

                        <div className="flex justify-between space-x-8 items-start w-full">
                            <div className="lg:px-4  mx-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                Subtotal
                            </div>
                            <p className="text-base xl:text-lg leading-6 flex items-center">
                                {subTotal}<TbCurrencyTaka></TbCurrencyTaka>
                            </p>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full pt-4 border-b">
                            <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                Delivery Charge
                            </div>
                            <p className="text-base xl:text-lg leading-6 flex items-center">
                                {deliveryCharge} <TbCurrencyTaka></TbCurrencyTaka>
                            </p>
                        </div>


                    </div>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div>
                                <input
                                    value={tnx}
                                    onChange={handleTnxSet}
                                    className="w-full rounded-lg border border-[#98EECC] p-3 text-sm"
                                    placeholder={placeholder}
                                    disabled={data?.tnxId}
                                    required
                                    name="tnx"
                                />
                            </div>
                            <div className="md:flex justify-between items-start w-full">
                                <div className="flex md:justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg text-start leading-6 font-semibold text-gray-800">
                                            COD  Delivery
                                            <br />
                                            <span className="font-normal">Delivery with 24 Hours</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6 mt-6 flex items-center justify-between text-gray-800">Total price :  <span className='flex items-center px-2'> {totalPrice}  <TbCurrencyTaka></TbCurrencyTaka></span> </p>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button
                                    onClick={() => handleUpdateOrder(_id)}
                                    disabled={data?.tnxId}
                                    className="w-full rounded border-2 flex gap-2 items-center justify-center bg-[#98EECC] hover:bg-black hover:text-[#98EECC] border-black px-6 py-3 text-sm font-bold uppercase tracking-wide ">

                                    {data?.tnxId ? <>Delivered <AiOutlineCheckCircle></AiOutlineCheckCircle> </> : 'Deliver Product'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src={data?.userPhoto} alt='' />
                                <div className=" flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{name}</p>
                                </div>
                            </div>

                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href={`mailto:${email}`} className="cursor-pointer text-sm leading-5 text-gray-800">{email}</a>
                            </div>
                            <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
                                <a href={`tel:${phone}`} className="cursor-pointer text-sm leading-5 text-gray-800">{phone}</a>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                    <p className="w-full lg:w-full  text-center md:text-left text-sm leading-5 text-gray-600"><span className='font-semibold text-sm'>District :</span> {district}</p>
                                    <p className="w-full lg:w-full text-center md:text-left text-sm leading-5 text-gray-600"><span className='font-semibold text-sm'>Delivery address :</span>{address}</p>
                                </div>
                                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing note</p>
                                    <p className="w-full lg:w-full  text-center md:text-left text-sm leading-5 text-gray-600">{note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;


