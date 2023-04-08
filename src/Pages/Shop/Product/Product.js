import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
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
      <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 class="text-2xl font-bold lg:text-3xl">{name}</h1>

            <p class="mt-1 text-sm text-gray-500">SKU: {stock}</p>
          </div>

          <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div class="lg:col-span-3">
              <div class="relative mt-4">
                <img
                  alt="Tee"
                  src={picture}
                  class="h-96 w-full px-5 lg:px-56  rounded-xl object-cover lg:h-full"
                />

                <div class="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    class="h-4 w-4"
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

                  <span class="ml-1.5 text-xs"> Hover to zoom </span>
                </div>
              </div>

              <ul class="mt-1 flex gap-1">
                <li>
                  <img alt="Tee" src={picture} class="h-16 w-16 rounded-md object-cover" />
                </li>

                <li>
                  <img alt="Tee" src={picture} class="h-16 w-16 rounded-md object-cover" />
                </li>

                <li>
                  <img alt="Tee" src={picture} class="h-16 w-16 rounded-md object-cover" />
                </li>

                <li>
                  <img alt="Tee" src={picture} class="h-16 w-16 rounded-md object-cover" />
                </li>
              </ul>
            </div>

            <div class="lg:sticky lg:top-0">
              <form class="space-y-4 lg:pt-8">
                <fieldset>
                  <legend class="text-lg font-bold">Color : {color}</legend>
                </fieldset>

                <fieldset>
                  <div class="mt-2 mx-auto gap-1">
                    <label for="material_cotton" class="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        class="peer sr-only"
                        checked
                      />

                      <span class="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        For : {category}
                      </span>
                    </label>
                  </div>
                </fieldset>

                {/*  */}
                <fieldset class="my-6">
                  <legend class="my-3 text-lg font-bold">Size</legend>

                  <div class="flex justify-center items-center mx-auto gap-1">
                    {size?.map((size) => (
                      <label for="size_xs" class="cursor-pointer">
                        <input type="radio" name="size" id="size_xs" class="peer sr-only" />

                        <span class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          {size}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                {/*  */}

                <div>
                  <p class="text-xl font-bold  justify-center flex items-center">
                    <TbCurrencyTaka></TbCurrencyTaka> {price} Taka
                  </p>
                </div>

                <button
                  type="submit"
                  class="w-full rounded border-4 bg-[#8af104] hover:bg-black hover:text-[#8af104] border-black px-6 py-3 text-sm font-bold uppercase tracking-wide "
                >
                  Add to cart
                </button>
              </form>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 ">
                <div className="collapse-title text-xl font-medium">Delivery Info</div>
                <div className="collapse-content">
                  <p>
                    tabIndex={0} {delivery_info}
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 ">
                <div className="collapse-title text-xl font-medium">Printing Techniques</div>
                <div className="collapse-content">
                  <p>
                    tabIndex={0} {printing_techniques}
                  </p>
                </div>
              </div>
              <div tabIndex={0} className="mt-6 collapse collapse-plus border-b bg-base-100 ">
                <div className="collapse-title text-xl font-medium">Refund Policy</div>
                <div className="collapse-content">
                  <p>
                    tabIndex={0} {refund_policy}
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-3">
              <div class="prose max-w-none">
                <p className="text-start">
                  {" "}
                  <span className="text-lg font-bold"> Product Info : </span>
                  {product_info}
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
