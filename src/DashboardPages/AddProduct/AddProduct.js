import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [availableSize, setAvailableSize] = useState([]);
  const [menSubCategory, setMenSubCategory] = useState([]);
  const [womenSubCategory, setWomenSubCategory] = useState([]);
  const navigate = useNavigate();

  let showdate = new Date();
  let year = showdate.getFullYear();
  let month = showdate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based values (0 for January)
  let date = showdate.getDate();
  let hours = showdate.getHours();
  let minutes = showdate.getMinutes();
  let seconds = showdate.getSeconds();
  let combinedValue = Number(`${year}${month}${date}${hours}${minutes}${seconds}`);


  // category changes funtionality
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (value === 'men' && category === 'women') {
        setCategory('both');
      } else if (value === 'women' && category === 'men') {
        setCategory('both');
      } else {
        setCategory(value);
      }
    } else {
      if (category === 'both') {
        setCategory(value === 'men' ? 'women' : 'men');
      } else {
        setCategory('');
      }
    }
  };


  //imgbb
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey)

  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [image4, setImage4] = useState('');
  const [image5, setImage5] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }
  const handleImage2Upload = (e) => {
    setImage2(e.target.files[0])
  }
  const handleImage3Upload = (e) => {
    setImage3(e.target.files[0])
  }
  const handleImage4Upload = (e) => {
    setImage4(e.target.files[0])
  }
  const handleImage5Upload = (e) => {
    setImage5(e.target.files[0])
  }

const images={image,image2,image3,image4,image5}
console.log(images)

  // Men Sub Category funtionality
  const handleMenSubCategory = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the value to the array
      setMenSubCategory([...menSubCategory, value]);
    } else {
      // Remove the value from the array
      const updatedValues = menSubCategory.filter((item) => item !== value);
      setMenSubCategory(updatedValues);
    }
  };


  // Women Sub Category funtionality
  const handleWomenSubCategory = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the value to the array
      setWomenSubCategory([...womenSubCategory, value]);
    } else {
      // Remove the value from the array
      const updatedValues = womenSubCategory.filter((item) => item !== value);
      setWomenSubCategory(updatedValues);
    }
  };



  // available size funtionality
  const handleAvailableSize = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the value to the array
      setAvailableSize([...availableSize, value]);
    } else {
      // Remove the value from the array
      const updatedValues = availableSize.filter((item) => item !== value);
      setAvailableSize(updatedValues);
    }
  };

  // add product functionality
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
      menSubCategory,
      womenSubCategory,
      collection_type,
      price,
      stock,
      size: availableSize,
      time: combinedValue,
    };
    console.log(product)
    // fetch("https://bliss-bd.vercel.app/allproducts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((data) => {
    //     toast.success("Your Post Added", {
    //       style: {
    //         border: "1px solid #98EECC",
    //         padding: "16px",
    //         color: "#98EECC",
    //       },
    //       iconTheme: {
    //         primary: "#98EECC",
    //         secondary: "#FFFAEE",
    //       },
    //     });
    //     navigate("/dashboard/allproducts");
    //     form.reset();
    //   })
    //   .catch((error) => console.error(error));
  };


  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);
  const footer = selectedDay ? (
    <p>Today selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );


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

            <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddproduct} className="space-y-4">
                <div>
                  <p className="text-start mx-1 my-2 text-lg font-semibold">Details</p>
                  <label className="sr-only">
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
                <div className="flex items-center">
                  <div className="form-control w-36">
                    <p className="text-start mx-1 text-lg font-semibold">Category</p>
                    <label className="cursor-pointer justify-start gap-4 mt-2 label">
                      <input
                        type="checkbox"
                        name="category"
                        value="men"
                        checked={category === 'men' || category === 'both'}
                        onChange={handleCategoryChange}
                        className="checkbox checkbox-success"
                      />
                      <span className="label-text">Men</span>
                    </label>
                  </div>
                  <div className="form-control w-32 ml-12 lg:ml-24">
                    <label className="cursor-pointer justify-start gap-4 mt-9 label">
                      <input
                        type="checkbox"
                        name="category"
                        value="women"
                        checked={category === 'women' || category === 'both'}
                        onChange={handleCategoryChange}
                        className="checkbox checkbox-success"
                      />
                      <span className="label-text">Women</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-baseline">
                  <div className="form-control w-36">
                    <label className="cursor-pointer justify-start gap-4 label">
                      <input
                        type="checkbox"
                        value="Drop-shoulder"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">Drop shoulder</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4 label">
                      <input
                        type="checkbox"
                        value="T-shirt"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">T-shirt</span>
                    </label>

                    <label className="cursor-pointer justify-start gap-4 label">
                      <input
                        type="checkbox"
                        value="Shirt"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">Shirt</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4 label">
                      <input
                        type="checkbox"
                        value="Hoodie"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">Hoodie</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4 label">
                      <input
                        type="checkbox"
                        value="Joggers"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">Joggers</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="Pants"
                        className="checkbox checkbox-success"
                        onChange={handleMenSubCategory}
                      />
                      <span className="label-text">Pants</span>
                    </label>
                  </div>
                  <div className="form-control w-36  ml-12 lg:ml-24 ">
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="Drop-shoulder"
                        className="checkbox checkbox-success"
                        onChange={handleWomenSubCategory}
                      />
                      <span className="label-text">Drop shoulder</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="Kurti"
                        className="checkbox checkbox-success"
                        onChange={handleWomenSubCategory}
                      />
                      <span className="label-text">Kurti</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="Tops"
                        className="checkbox checkbox-success"
                        onChange={handleWomenSubCategory}
                      />
                      <span className="label-text">Tops</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="T-shirt"
                        className="checkbox checkbox-success"
                        onChange={handleWomenSubCategory}
                      />
                      <span className="label-text">T-shirt</span>
                    </label>
                    <label className="cursor-pointer justify-start gap-4  label">
                      <input
                        type="checkbox"
                        value="Trouser"
                        className="checkbox checkbox-success"
                        onChange={handleWomenSubCategory}
                      />
                      <span className="label-text">Trouser</span>
                    </label>
                  </div>
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
                      type="number"
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
                      type="file" id="img1" accept="image/*"
                      onChange={handleImageUpload}
                      required
                      name="picture1"
                      />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 2"
                      type="file" id="img2" accept="image/*"
                      onChange={handleImage2Upload}
                      required
                      name="picture2"
                      />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 3"
                      type="file" id="img3" accept="image/*"
                      onChange={handleImage3Upload}
                      name="picture3"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 4"
                      type="file" id="img4" accept="image/*"
                      onChange={handleImage4Upload}
                      name="picture4"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Picture 5"
                      type="file" id="img5" accept="image/*"
                      name="picture5"
                      onChange={handleImage5Upload}
                    />
                  </div>
                </div>
                <div className="form-control w-32">
                  <p className="text-start mx-1 text-lg font-semibold">Sizes</p>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="S"
                      onChange={handleAvailableSize}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">S</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="M"
                      onChange={handleAvailableSize}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">M</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="L"
                      onChange={handleAvailableSize}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">L</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="XL"
                      onChange={handleAvailableSize}
                      className="checkbox checkbox-success"
                    />
                    <span className="label-text">XL</span>
                  </label>
                  <label className="cursor-pointer justify-start gap-4 label">
                    <input
                      type="checkbox"
                      value="XXL"
                      onChange={handleAvailableSize}
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
                    <label className="sr-only">
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
