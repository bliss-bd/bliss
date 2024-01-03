import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../../Contexts/UserContexts/UserContexts";
import TopsellProducts from "../../Home/ShowProducts/TopsellProducts";

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
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  return (
    <div>

      <section className="text-black mb-12">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>

            <p className="mt-1 text-sm font-semibold ">SKU: {stock}</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
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
                      className="h-96 w-full px-5 lg:px-56 bg-gray-100 rounded-xl object-cover lg:h-full cursor-pointer"
                      loading="lazy"
                    />

                    <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
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

                      <span className="ml-1.5 text-xs cursor-pointer"> View full image </span>
                    </div>
                  </div>
                </PhotoView>
                <ul className="mt-4 flex gap-1  lg:px-0 px-4">
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
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
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
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
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
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
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
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
                        loading="lazy"
                      />
                    </PhotoView>
                  </li>
                </ul>
              </div>
            </PhotoProvider>
            <div className="lg:sticky lg:top-0">
              <div className="lg:col-span-3 lg:px-0 px-3">
                <div className="prose max-w-none">
                  <p className="text-justify font-semibold">
                    {" "}
                    <span className="text-3xl font-bold text-black"> To Order: </span> <br />
                    Inbox Your Colors, Size, Address and Number.
                  </p>
                </div>
              </div>
              <div className="space-y-4 lg:pt-8">
                <fieldset className="my-6">
                  <legend className="my-3 text-lg font-bold">Size</legend>

                  <div className="flex justify-center items-center mx-auto gap-1">
                    {size?.map((size, index) => (
                      <p required key={index} className={`cursor-pointer group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ${selectedSize === size ? 'bg-black text-white' : 'bg-transparent text-black'
                        }`} onClick={() => handleSelectSize(size)}>
                        {size}
                      </p>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <p className="text-xl font-bold  justify-center flex items-center">
                    <TbCurrencyTaka></TbCurrencyTaka> {price} Taka
                  </p>
                </div>
                <div className="mt-4 flex justify-center items-center">

                  <div className="flex items-center border-2 border-gray-200 rounded">
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
                      className=" w-8 h-11 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
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
                    className="w-full rounded border-2 bg-[#98EECC] hover:bg-black hover:text-[#98EECC] border-black px-4 mx-2 py-3 text-sm font-bold uppercase tracking-wide "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100">
                <div className="collapse-title text-xl font-medium">Delivery Info</div>
                <div tabIndex={1} className="collapse-content text-justify">
                  <p>
                    {" "}
                    Delivery Is done within <span className="font-bold">2-3</span> working days.
                    P.S. in case of custom order it will take{" "}
                    <span className="font-bold"> 1-7</span> working days. In case of long government
                    holidays like <span className="font-bold">Eid Ul Fitr</span> And{" "}
                    <span className="font-bold">Eid ul Adha </span>delivery may be delayed until the
                    ending of the holiday.
                  </p>
                  <p>
                    {" "}
                    <br /> Delivery within chittagong city is{" "}
                    <span className="font-bold">60 taka </span>
                  </p>
                  <p>
                    {" "}
                    <br /> Delivery Outside chittagong city is{" "}
                    <span className="font-bold">100 taka </span>
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 ">
                <div className="collapse-title text-xl font-medium">Printing Techniques</div>
                <div tabIndex={1} className="collapse-content text-justify">
                  We use various types of printing techniques but our most used ones are
                  <li>Screen printing</li>
                  <li>DTF Printing</li>
                  <li>DTG Printing</li>
                  <li>All Over Print</li>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 ">
                <div className="collapse-title text-xl font-medium">Refund Policy</div>
                <div tabIndex={1} className="collapse-content text-justify">
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
                  <span className="text-4xl font-bold"> Product Info </span> <br />
                </p>
              </div>
            </div>
            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold">
                  {" "}
                  <span className="text-lg font-bold">Size in inch For T-shirts: </span> <br />
                  M: Chest 38 - Length 27
                  <br /> L: Chest 40- Length 28 <br />
                  XL: Chest 42 - Length 29
                  <br /> XXL: Chest 44 - Length 30
                </p>
              </div>
            </div>
            <div className="lg:col-span-3  lg:px-0 px-3">
              <div className="prose max-w-none">
                <p className="text-justify font-semibold">
                  {" "}
                  <span className="text-lg font-bold"> Fabric Specifications : </span> <br />
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
                <p className="text-justify font-semibold">
                  {" "}
                  <span className="text-lg font-bold"> Disclaimer : </span> <br />
                  Measurement can vary within 1 inch. this is within our tolerance. Color may vary
                  according to device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TopsellProducts></TopsellProducts>
      <ScrollToTopOnMount />
    </div>
  );
};

export default Product;
