import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../../Contexts/UserContexts/UserContexts";
// import TopsellProducts from "../../Home/ShowProducts/TopsellProducts";
// import AdvertiseProduct from "../../Home/Advertiseproduct/AdvertiseProduct";
import AdvertiseProducts from "../../Home/ShowProducts/AdvertiseProducts";

const Product = () => {
  const data = useLoaderData();
  const { _id, name, price, stock, size } = data;
  const { addToCart } = useContext(userContext)
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const product = {
    _id, name, price, size: selectedSize, quantity, picture: data?.picture1
  }

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("ADDED TO CART SUCCESSFULLY!", {
      style: {
        border: "1px solid #98EECC",
        padding: "16px",
        color: "#98EECC",
      },
      iconTheme: {
        primary: "#98EECC",
        secondary: "#FFFAEE",
      },
    });
  };
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0,0);
    }, []);
  
    return null;
  }
  return (
    <div className="pb-8 bg-[#1b1b1b] ">

      <section className="text-white bg-[#1b1b1b] mb-12 lg:pt-44 pt-0">
        <div className="relative mx-auto max-w-screen md:px-8 px-4 py-8">
          <div className="my-4">
            <h1 className="text-lg font-bold lg:text-3xl custom-font uppercase">{name}</h1>

            <p className="mt-1 text-sm font-semibold  uppercase custom-font2">SKU: {stock}</p>
          </div>
          <div className="grid md:gap-8 gap-4 lg:grid-cols-4 lg:items-start">
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <div className="lg:col-span-3">
                <PhotoView src={data?.picture1}>
                  <div className="relative mt-4">
                    <img
                      alt="Tee"
                      src={data?.picture1}
                      className="h-96 w-full px-5 lg:px-56 bg-gray-100 rounded object-cover lg:h-full cursor-pointer"
                      loading="lazy"
                    />

                    <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-lg bg-black/75 px-3 py-1.5 text-white">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>

                      <span className="ml-1.5 text-xs cursor-pointer  custom-font2  uppercase"> View full image </span>
                    </div>
                  </div>
                </PhotoView>
                <ul className="mt-4 flex gap-4">
                  <li>
                    <PhotoView
                      src={
                        data?.picture2
                          ? data?.picture2
                          : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                      }
                    >
                      <img
                        alt="Tee"
                        src={
                          data?.picture2
                            ? data?.picture2
                            : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                        }
                        className="md:h-40 md:w-40 h-16 w-16 rounded object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView
                      src={
                        data?.picture3
                          ? data?.picture3
                          : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                      }
                    >
                      <img
                        alt="Tee"
                        src={
                          data?.picture3
                            ? data?.picture3
                            : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                        }
                        className="md:h-40 md:w-40 h-16 w-16  rounded object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView
                      src={
                        data?.picture4
                          ? data?.picture4
                          : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                      }
                    >
                      <img
                        alt="Tee"
                        src={
                          data?.picture5
                            ? data?.picture5
                            : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                        }
                        className="md:h-40 md:w-40 h-16 w-16  rounded object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView
                      src={
                        data?.picture5
                          ? data?.picture5
                          : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                      }
                    >
                      <img
                        alt="Tee"
                        src={
                          data?.picture5
                            ? data?.picture5
                            : "https://i.ibb.co/k3ZMPy3/toon-showing-blank-placard-1160-189.jpg"
                        }
                        className="md:h-40 md:w-40 h-16 w-16  rounded object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </PhotoView>
                  </li>
                </ul>
              </div>
            </PhotoProvider>
            <div className="lg:sticky lg:top-40">
              <div className="lg:col-span-3 lg:px-0 px-3">
                <div className="prose max-w-none">
                  <p className="text-justify font-semibold  custom-font2  uppercase">
                    {" "}
                    <span className="text-3xl font-bold  custom-font  uppercase"> To Order </span> <br />
                    Inbox Your Colors, Size, Address and Number.
                  </p>
                </div>
              </div>
              <div className="space-y-4 lg:pt-8">
                <fieldset className="md:my-6 my-0">
                  <legend className="my-3 text-lg font-bold custom-font2  uppercase">Size</legend>

                  <div className="flex justify-center items-center mx-auto gap-1 bg-[#1b1b1b]">
                    {size?.map((size, index) => (
                      <p required key={index} className={`cursor-pointer group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium   ${selectedSize === size ? 'bg-[#1b1b1b]  text-white' : 'bg-white text-black' 
                        }`} onClick={() => handleSelectSize(size)}>
                        {size}
                      </p>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <p className="text-xl font-bold  justify-center flex items-center custom-font2  uppercase">
                    <TbCurrencyTaka></TbCurrencyTaka > {price} Taka
                  </p>
                </div>
                <div className="mt-4 flex justify-center items-center">

                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      disabled={quantity === 1}
                      className={`${quantity === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} w-8 h-11 leading-10 text-gray-600 transition hover:opacity-75`}
                    >-
                    </button>
                    <input
                      type="number"
                      id="Quantity"
                      value={quantity}
                      className=" w-8 h-11 border-transparent text-center bg-[#1b1b1b] [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      onClick={increaseQuantity}
                      className="w-8 h-11 leading-10 text-gray-600 transition hover:opacity-75"
                    >+
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex justify-center bg-[#1b1b1b] border-2 border-[#a6adbb] hover:border-black hover:bg-white text-white hover:text-black p-3 ml-1  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium  custom-font2  uppercase bg-[#a6adbb]">Delivery Info</div>
                <div tabIndex={1} className="collapse-content text-justify bg-[#a6adbb]">
                  <p className="custom-font2  uppercase ">
                    {" "}
                    Delivery Is done within <span className="font-bold">2-3</span> working days.
                    P.S. in case of custom order it will take{" "}
                    <span className="font-bold custom-font2 "> 1-7</span> working days. In case of long government
                    holidays like <span className="font-bold">Eid Ul Fitr</span> And{" "}
                    <span className="font-bold custom-font2  ">Eid ul Adha </span>delivery may be delayed until the
                    ending of the holiday.
                  </p>
                  <p  className="custom-font2  uppercase ">
                    {" "}
                    <br /> Delivery within chittagong city is{" "}
                    <span className="font-bold custom-font2  uppercase">60 taka </span>
                  </p>
                  <p>
                    {" "}
                    <br /> Delivery Outside chittagong city is{" "}
                    <span className="font-bold custom-font2  uppercase">100 taka </span>
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium custom-font2  uppercase bg-[#a6adbb]">Printing Techniques</div>
                <div tabIndex={1} className="collapse-content text-justify custom-font2  uppercase bg-[#a6adbb]">
                  We use various types of printing techniques but our most used ones are
                  <li>Screen printing</li>
                  <li>DTF Printing</li>
                  <li>DTG Printing</li>
                  <li>All Over Print</li>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 rounded-lg">
                <div className="collapse-title text-xl font-medium custom-font2  uppercase bg-[#a6adbb]">Refund Policy</div>
                <div tabIndex={1} className="collapse-content text-justify custom-font2  uppercase bg-[#a6adbb]">
                  <p>
                    We Provide 4 days exchange and refund if goods received by customers are damaged
                    in any kind.No refund or exchange on size and color as we mention the size chart
                    of our products in our website.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold">
                  {" "}
                  <span className="text-4xl font-bold custom-font  uppercase"> Product Info </span> <br />
                </p>
              </div>
            </div>
            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold custom-font2  uppercase">
                  {" "}
                  <span className="text-lg font-bold custom-font2  uppercase">Size in inch For T-shirts: </span> <br />
                  M: Chest 38 - Length 27
                  <br /> L: Chest 40- Length 28 <br />
                  XL: Chest 42 - Length 29
                  <br /> XXL: Chest 44 - Length 30
                </p>
              </div>
            </div>
            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold custom-font2  uppercase">
                  {" "}
                  <span className="text-lg font-bold custom-font2  uppercase"> Fabric Specifications : </span> <br />
                  Relaxed fit, Crew neck,
                  <br /> 180+ GSM <br />
                  Heavy weight, <br />
                  100% combed cotton <br />
                  Neck ribbing, side seamed, shoulder to shoulder tape, double needle hems,
                  preshrunk to minimize shrinkage.
                </p>
              </div>
            </div>
            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold custom-font2  uppercase">
                  {" "}
                  <span className="text-lg font-bold custom-font2  uppercase"> Disclaimer : </span> <br />
                  Measurement can vary within 1 inch. this is within our tolerance. Color may vary
                  according to device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdvertiseProducts></AdvertiseProducts>

    </div>
  );
};

export default Product;
