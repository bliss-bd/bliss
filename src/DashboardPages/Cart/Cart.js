import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Contexts/UserContexts/UserContexts';
// import sgMail from '@sendgrid/mail';
import axios from 'axios';


const customStyles = {


  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '100%',
  },
};
const Cart = () => {
  const { cartItems, removeFromCart, getTotalPrice, getSubtotal, user } = useContext(userContext)
  const [showModal, setShowModal] = useState(false);
  const [district, setDistrict] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState(null);
  const navigate = useNavigate();

  let showdate = new Date();

  let year = showdate.getFullYear();
  let month = showdate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based values (0 for January)
  let date = showdate.getDate();
  let hours = showdate.getHours();
  let minutes = showdate.getMinutes();
  let seconds = showdate.getSeconds();

  let combinedValue = Number(`${year}${month}${date}${hours}${minutes}${seconds}`);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setDistrict(selectedDistrict);

    if (selectedDistrict === 'Chattogram') {
      setDeliveryCharge(60);
    } else {
      setDeliveryCharge(100);
    }
  };




  const handlePlaceOrder = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleConfirmOrder = async () => {
    const form = document.getElementById('billingForm');
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const district = form.district.value;
    const address = form.address.value;
    const note = form.note.value;
    const billingDetail = {
      name,
      email,
      phone,
      district,
      address,
      note,
      cartItems,
      subTotal: getTotalPrice(),
      deliveryCharge,
      totalPrice: getTotalPrice() + deliveryCharge,
      userPhoto: user?.photoURL,
      time: combinedValue,
    };
  };



  // sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

  // const handleConfirmOrder = async () => {
  //   const form = document.getElementById('billingForm');
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const phone = form.phone.value;
  //   const district = form.district.value;
  //   const address = form.address.value;
  //   const note = form.note.value;
  //   const billingDetail = {
  //     name,
  //     email,
  //     phone,
  //     district,
  //     address,
  //     note,
  //     cartItems,
  //     subTotal: getTotalPrice(),
  //     deliveryCharge,
  //     totalPrice: getTotalPrice() + deliveryCharge,
  //     userPhoto: user?.photoURL,
  //     time: combinedValue,
  //   };

  //   try {
  //     // Send email to client
  //     const clientEmailMsg = {
  //       to: email,
  //       from: 'faforhad450@gmail.com',
  //       subject: 'Order Confirmation',
  //       text: 'Thank you for your order! We have received it successfully.',
  //       html: '<p>Thank you for your order! We have received it successfully.</p>',
  //     };
  //     await sgMail.send(clientEmailMsg);

  //     // Send email to your email address
  //     const yourEmailMsg = {
  //       to: 'faforhad450@gmail.com',
  //       from: 'faforhad450@gmail.com',
  //       subject: 'New Order',
  //       text: 'You have received a new order.',
  //       html: '<p>You have received a new order.</p>',
  //     };
  //     await sgMail.send(yourEmailMsg);

  //     // Save the order data to the backend
  //     await fetch('https://bliss-server-y2j1.vercel.app/order', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(billingDetail),
  //     });

  //     toast.custom((t) => (
  //           <div
  //             className={`${t.visible ? 'animate-enter' : 'animate-leave'
  //               } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  //           >
  //             <div className="flex-1 w-0 p-4">
  //               <div className="flex items-start">
  //                 <div className="flex-shrink-0 pt-0.5">
  //                   <img
  //                     className="h-10 w-10 rounded-full"
  //                     src={billingDetail?.userPhoto}
  //                     alt=""
  //                   />
  //                 </div>
  //                 <div className="ml-3 flex-1">
  //                   <p className="text-sm font-medium text-gray-900">
  //                     {name}
  //                   </p>
  //                   <p className="mt-1 text-md text-gray-500">
  //                     Thank you for your order! We've received it successfully. Please check your email inbox or spam folder for order details.
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="flex border-l border-gray-200">
  //               <button
  //                 onClick={() => toast.dismiss(t.id)}
  //                 className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#98EECC] hover:text-[#98EECC] focus:outline-none focus:ring-2 focus:ring-[#98EECC]"
  //               >
  //                 Close
  //               </button>
  //             </div>
  //           </div>
  //     ));

  //     form.reset();
  //     setShowModal(false);
  //   } catch (error) {
  //     console.error('Error sending email or saving order', error);
  //   }
  // };


  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-4 text-gray-800 bg-white  pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">

          {cartItems?.map((cartItem) => (

            <div className="rounded md:w-2/3 mx-auto" key={cartItem._id}>
              <div className="justify-between items-center mb-6 rounded bg-white lg:p-2 p-3 shadow-md flex">
                <img src={cartItem.picture} alt="product-image" className=" lg:p-3  p-0  w-32 h-32 rounded" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between  lg:p-3  p-0  ">
                  <div className="sm:mt-0">
                    <h2 className="text-lg text-start font-bold text-gray-900">{cartItem.name}</h2>
                    <p className="mt-1 text-start text-sm text-gray-700">Size : {cartItem.size}</p>
                    <p className="mt-1 text-start text-sm text-gray-700 flex items-center gap-1">Price : {cartItem.price} <TbCurrencyTaka></TbCurrencyTaka></p>
                  </div>
                  <div className="mt-4 mr-8 lg:justify-between inline sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center justify-start lg:justify-end border-gray-100">
                      <span className=" rounded-l  py-1 lg:px-3.5 px-0 duration-100 text-sm cursor-default">Quantity : </span>
                      <input className="h-8 w-8 lg:border border-none bg-white text-center text-sm outline-none " value={cartItem.quantity} min="1" />
                      <span className="cursor-default rounded-r  py-1 px-3 duration-100 "> </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <p className="text-sm flex items-center gap-1">Subtotal : {getSubtotal(cartItem._id)}  <TbCurrencyTaka></TbCurrencyTaka></p>
                      <p onClick={() => handleRemoveFromCart(cartItem._id)}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr className="pb-6 mt-6" />
          <form id="billingForm" onSubmit={handlePlaceOrder} className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-4 bg-gray-100 rounded">
                <h1 className="ml-2 font-bold uppercase">Billing Detail</h1>
              </div>
              <div className="px-4 mt-4 text-start">
                <p className='my-2'>Full Name*</p>
                <input name='name' className="w-full h-12 bg-gray-100 rounded px-4" required ></input>
              </div>
              <div className="px-4 text-start">
                <p className='my-2'>Email*</p>
                <input name='email' className="w-full h-12 bg-gray-100 rounded px-4" required type='email'></input>
              </div>
              <div className="px-4 text-start">
                <p className='my-2'>Phone*</p>
                <input name='phone' className="w-full h-12 bg-gray-100 rounded px-4" required></input>
              </div>
              <div className="px-4 text-start">
                <p className='my-2'>Choose District*</p>
                <select value={district} onChange={handleDistrictChange} name='district' className="w-full h-12 bg-gray-100 rounded px-4" type='text' required>
                  <option value="">Select District</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Jhalokati">Jhalokati</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Cumilla">Cumilla</option>
                  <option value="15">CoxsBazar</option>
                  <option value="Feni">Feni</option>
                  <option value="Khagrachhari">Khagrachhari</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Jessore">Jessore</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Magura">Magura</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Narail">Narail</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Jamalpur">Jamalpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Bogura">Bogura</option>
                  <option value="Joypurhat">Joypurhat</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Natore">Natore</option>
                  <option value="Chapainawabganj">Chapainawabganj</option>
                  <option value="Pabna">Pabna</option>
                  <option value="52">Rajshahi</option>
                  <option value="Rajshahi">Faridpur</option>
                  <option value="Moulvibazar">Moulvibazar</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Sirajgan">Sirajgan</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Lalmonirha">Lalmonirhat</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Nilphamari">Nilphamari</option>
                </select>
              </div>
              <div className="px-4 text-start">
                <p className='my-2'>Delivery Address*</p>
                <input name='address' className="w-full h-12 bg-gray-100 rounded px-4" type='text' required></input>
              </div>
              <div className="px-4 mt-4 text-start">
                <p>Addition information</p>
                <p className="mb-4 italic">Order Notes : </p>
                <textarea name='note' className="w-full h-24 bg-gray-100 rounded"></textarea>
              </div>
            </div>
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-4 bg-gray-100 rounded">
                <h1 className="ml-2 font-bold uppercase">Order Details</h1>
              </div>
              <div className="p-4">
                {/* <p className="mb-6 italic">Shipping and additionnal costs</p> */}
                <div className="flex justify-between">
                  <div className="lg:px-4  mx-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Subtotal
                  </div>
                  <div className="lg:px-4 flex items-center  mx-2 lg:text-lg font-bold text-center text-gray-900">
                    {getTotalPrice()}<TbCurrencyTaka></TbCurrencyTaka>
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Delivery Charge
                  </div>
                  <div class="lg:px-4 flex items-center  lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {deliveryCharge} <TbCurrencyTaka></TbCurrencyTaka>
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 flex items-center lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {getTotalPrice() + deliveryCharge} <TbCurrencyTaka></TbCurrencyTaka>
                  </div>
                </div>
                <button type='submit' className="flex justify-center w-full px-10 py-3 mt-6 font-medium  uppercase rounded-md shadow item-center  bg-[#98EECC] hover:bg-black hover:text-[#98EECC] border-black border-2 focus:shadow-outline focus:outline-none">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                  <span className="ml-2 mt-5px">Place Order</span>
                </button>
              </div>
            </div>
          </form>
          {/* Modal */}
          <Modal
            isOpen={showModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Confirmation Modal"
          >
            <h2>Confirm Order</h2>
            <p>Are you sure you want to place the order?</p>
            <div className="flex justify-end">
              <button
                className="mr-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleConfirmOrder}
              >
                Confirm
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Cart;