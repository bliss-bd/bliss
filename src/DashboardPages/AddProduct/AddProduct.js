import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AddProduct = () => {
  const navigate = useNavigate();
  const [checkedValues, setCheckedValues] = useState([]);

  let showdate = new Date();

  let year = showdate.getFullYear();
  let month = showdate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based values (0 for January)
  let date = showdate.getDate();
  let hours = showdate.getHours();
  let minutes = showdate.getMinutes();
  let seconds = showdate.getSeconds();

  let combinedValue = Number(`${year}${month}${date}${hours}${minutes}${seconds}`);

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
      size: checkedValues,
      time: combinedValue,
    };
    fetch("https://bliss-server-y2j1.vercel.app/allproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((data) => {
        toast.success("Your Post Added", {
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
        navigate("/dashboard/allproducts");
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <section className="">
        <div className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:pt-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg lg:text-3xl font-bold ">ADD A PRODUCT</p>

              <div className="mt-10 not-italic text-lg lg:text-5xl font-bold text-[#98EECC]">
                Deal Online With <br /> Confidence
              </div>
              <div className="mt-10 ml-6 lg:ml-16">
                <DayPicker
                  mode="single"
                  required
                  selected={selectedDay}
                  // onSelect={setSelectedDay}
                  footer={footer}
                />
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddproduct} className="space-y-4">
                <div>
                  <p className="text-start mx-1 my-2 text-lg font-semibold">Details</p>
                  <label className="sr-only" for="name">
                    Product Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Product Name"
                    type="text"
                    required
                    name="name"
                  />
                </div>
                <div>
                  <label className="sr-only " required for="name">
                    Category
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    name="category"
                  >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div className="grid gap-4 text-center sm:grid-cols-1">
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm hidden"
                      name="collection_type"
                      value="New"
                      placeholder="New"
                    ></input>
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Price"
                      type="tel"
                      required
                      name="price"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 1"
                      type="tel"
                      required
                      name="picture1"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 2"
                      type="tel"
                      name="picture2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 3"
                      type="tel"
                      name="picture3"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 4"
                      type="tel"
                      name="picture4"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 5"
                      type="tel"
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
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Stock"
                      type="tel"
                      required
                      name="stock"
                    />
                  </div>
                  <div>
                    <label className="sr-only" for="phone">
                      date
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
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
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full rounded border-2 bg-[#98EECC] hover:bg-black hover:text-[#98EECC] border-black px-6 py-3 text-sm font-bold uppercase tracking-wide "
                  >
                    Add Product
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
