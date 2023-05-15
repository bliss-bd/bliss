import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";

const Product = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    color,
    delivery_info,
    name,
    picture,
    price,
    printing_techniques,
    product_info,
    refund_policy,
    stock,
    size,
    category,
  } = data;

  return (
    <div>
      <section className="text-black">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-3xl">{name}</h1>

            <p className="mt-1 text-sm text-gray-500">SKU: {stock}</p>
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
                <PhotoView src={picture}>
                  <div className="relative mt-4">
                    <img
                      alt="Tee"
                      src={picture}
                      className="h-96 w-full px-5 lg:px-56  rounded-xl object-cover lg:h-full cursor-pointer"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>

                      <span className="ml-1.5 text-xs cursor-pointer"> View full image </span>
                    </div>
                  </div>
                </PhotoView>
                <ul className="mt-4 flex gap-1  lg:px-0 px-4">
                  <li>
                    <PhotoView src={picture}>
                      <img
                        alt="Tee"
                        src={picture}
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView src={picture}>
                      <img
                        alt="Tee"
                        src={picture}
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView src={picture}>
                      <img
                        alt="Tee"
                        src={picture}
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
                      />
                    </PhotoView>
                  </li>

                  <li>
                    <PhotoView src={picture}>
                      <img
                        alt="Tee"
                        src={picture}
                        className="h-16 w-16 rounded-md object-cover cursor-pointer"
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
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Color : {color}</legend>
                </fieldset>

                <fieldset>
                  <div className="mt-2 mx-auto gap-1">
                    <label for="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        For : {category}
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/*  */}
                <fieldset className="my-6">
                  <legend className="my-3 text-lg font-bold">Size</legend>

                  <div className="flex justify-center items-center mx-auto gap-1">
                    {size?.map((size) => (
                      <label for="size_xs" className="cursor-pointer mx-1">
                        <input type="radio" name="size" id="size_xs" className="peer sr-only" />
                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ">
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                {/*  */}

                <div>
                  <p className="text-xl font-bold  justify-center flex items-center">
                    <TbCurrencyTaka></TbCurrencyTaka> {price} Taka
                  </p>
                </div>
              </form>
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
                    <br /> Delivery within chittagong city is{" "}
                    <span className="font-bold">60 taka </span>
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
                  <span className="text-lg font-bold"> Product Info : </span> <br />
                  {product_info}
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
    </div>
  );
};

export default Product;
