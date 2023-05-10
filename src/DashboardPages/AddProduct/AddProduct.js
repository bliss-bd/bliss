import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { userContext } from '../../Contexts/UserContexts/UserContexts';

const AddProduct = () => {
    const { user } = useContext(userContext)
    const navigate = useNavigate()



    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);

    const footer = selectedDay ? (
        <p>Today selected {format(selectedDay, 'PPP')}.</p>
    ) : (
        <p>Please pick a day.</p>
    );



    const [currentUser, setCurrentUser] = useState([])
    console.log(user, currentUser)

    useEffect(() => {
        fetch(`https://xtocky-cycle-server.vercel.app/users/${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            })
    }, [user.email])

    const handleAddproduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const Original_price = form.Original_price.value;
        const resale_price = form.resale_price.value;
        const picture = form.picture.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const Used_year = form.Used_year.value;
        const condition = form.condition.value;
        const about = form.about.value;
        const categoryId = form.categoryId.value;
        const date = form.date.value;
        const isVerifyed = currentUser?.isVerifyed
        const product = {
            Original_price, resale_price, picture, name, email, phone, location, Used_year, condition, about, categoryId, author: user?.displayName, isVerifyed, date,
        }
        fetch('https://xtocky-cycle-server.vercel.app/allproducts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(data => {
                console.log(data)
                toast.success('Your Post Added', {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#713200',
                    },
                    iconTheme: {
                        primary: '#713200',
                        secondary: '#FFFAEE',
                    },
                })
                navigate('/dashboard/myproducts')
                form.reset()
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <section class="">
                <div class="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:pt-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:col-span-2 lg:py-12">
                            <p class="max-w-xl text-lg lg:text-3xl font-bold ">
                                ADD A PRODUCT
                            </p>

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
                                <p className='text-start mx-1 my-2 text-lg font-semibold'>Details</p>
                                    <label class="sr-only" for="name">Product Name</label>
                                    <input
                                        class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="Product Name"
                                        type="text"
                                        required
                                        name='name'
                                    />
                                </div>
                                <div>
                                    <label class="sr-only " required for="name">Category</label>
                                    <select
                                        class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        name='category'
                                    >
                                        <option value="637f87009ce572ca0f69f279">Women</option>
                                        <option value="637f87009ce572ca0f69f27b">Men</option>
                                        <option value="637f87009ce572ca0f69f27c">Both</option>
                                    </select>
                                </div>


                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                    <select
                                        class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        name='category'
                                    >
                                        <option value="637f87009ce572ca0f69f279">New</option>
                                    </select>
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Color"
                                            name='color'
                                            type="tel"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Price"
                                            type="tel"
                                            required
                                            name='price'
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Picture 1"
                                            type="tel"
                                            required
                                            name='picture'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Picture 2"
                                            type="tel"
                                            required
                                            name='picture1'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Picture 3"
                                            type="tel"
                                            required
                                            name='picture2'
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-32">
                                    <p className='text-start mx-1 text-lg font-semibold'>Sizes</p>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">SML</span>
                                    </label>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">MED</span>
                                    </label>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">LRG</span>
                                    </label>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">XLG</span>
                                    </label>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">2XL</span>
                                    </label>
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" className="checkbox checkbox-success" />
                                        <span className="label-text">3XL</span>
                                    </label>
                                </div>
                                <div>
                                    <label class="sr-only" for="message">Product info</label>
                                    <textarea
                                        class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                        placeholder="product info"
                                        rows="3"
                                        name='about'
                                    ></textarea>
                                </div>
                                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                <div>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="Stock"
                                            type="tel"
                                            required
                                            name='stock'
                                        />
                                    </div>
                                    <div>
                                        <label class="sr-only" for="phone">date</label>
                                        <input
                                            class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                            placeholder="date"
                                            type="text"
                                            required
                                            id="date"
                                            name='date'
                                            value={format(selectedDay, 'PPP')}
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