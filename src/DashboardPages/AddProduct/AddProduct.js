import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AddProduct = () => {
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState([]);
  console.log(checkedValues);
  let showdate = new Date();
  let dispalayDate =
    showdate.getHours() + ":" + showdate.getMinutes() + ":" + showdate.getSeconds();

  console.log(dispalayDate);
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // Add the value to the array
      setCheckedValues([...checkedValues, value]);
    } else {
      // Remove the value from the array
      const updatedValues = checkedValues.filter((item) => item !== value);
      setCheckedValues(updatedValues);
    }
  };

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);

  const footer = selectedDay ? (
    <p>Today selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const handleAddproduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const picture1 = form.picture1.value;
    const picture2 = form.picture2.value;
    const picture3 = form.picture3.value;
    const picture4 = form.picture4.value;
    const picture5 = form.picture5.value;
    const category = form.category.value;
    const collection_type = form.collection_type.value;
    const stock = form.stock.value;
    const date = form.date.value;
    const product = {
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
      name,
      category,
      collection_type,
      price,
      stock,
      date,
      size: checkedValues,
      time: dispalayDate,
    };
    fetch("http://localhost:5000/allproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((data) => {
        console.log(data);
        toast.success("Your Post Added", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        navigate("/dashboard/allproducts");
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <section class="">
        <div class="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:pt-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg lg:text-3xl font-bold ">ADD A PRODUCT</p>

              <div class="mt-10 not-italic text-lg lg:text-5xl font-bold text-[#8af104]">
                Deal Online With <br /> Confidence
              </div>
              <div class="mt-10 ml-6 lg:ml-16">
                <DayPicker
                  mode="single"
                  required
                  selected={selectedDay}
                  // onSelect={setSelectedDay}
                  footer={footer}
                />
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddproduct} class="space-y-4">
                <div>
                  <p className="text-start mx-1 my-2 text-lg font-semibold">Details</p>
                  <label class="sr-only" for="name">
                    Product Name
                  </label>
                  <input
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Product Name"
                    type="text"
                    required
                    name="name"
                  />
                </div>
                <div>
                  <label class="sr-only " required for="name">
                    Category
                  </label>
                  <select
                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    name="category"
                  >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                  </select>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      name="collection_type"
                      value="New"
                      placeholder="New"
                    ></input>
                  </div>
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      type="tel"
                      required
                      name="price"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 1"
                      type="tel"
                      required
                      name="picture1"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 2"
                      type="tel"
                      required
                      name="picture2"
                    />
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 3"
                      type="tel"
                      required
                      name="picture3"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 4"
                      type="tel"
                      required
                      name="picture4"
                    />
                  </div>
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 5"
                      type="tel"
                      required
                      name="picture5"
                    />
                  </div>
                </div>
                <div className="form-control w-32">
                  <p className="text-start mx-1 text-lg font-semibold">Sizes</p>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="S"
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">S</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="M"
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">M</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="L"
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">L</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="XL"
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">XL</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="XXL"
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">XXL</span>
                  </label>
                </div>
                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Stock"
                      type="tel"
                      required
                      name="stock"
                    />
                  </div>
                  <div>
                    <label class="sr-only" for="phone">
                      date
                    </label>
                    <input
                      class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="date"
                      type="text"
                      required
                      id="date"
                      name="date"
                      value={format(selectedDay, "PPP")}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <button
                    type="submit"
                    className="w-full rounded border-4 bg-[#8af104] hover:bg-black hover:text-[#8af104] border-black px-6 py-3 text-sm font-bold uppercase tracking-wide "
                  >
                    Add to cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
