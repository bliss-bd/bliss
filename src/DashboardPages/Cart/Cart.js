import React , { useContext,useState }from 'react';
import { userContext } from '../../Contexts/UserContexts/UserContexts';

const Cart = () => {
  const [newQuantity, setNewQuantity] = useState(1);
  const {cart} = useContext(userContext)
  
    const { _id,name,price,size,quantity,picture } = cart

    console.log(_id)

  console.log(cart)
  const decreaseQuantity = () => {
    if (newQuantity > 1) {
      setNewQuantity(newQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    setNewQuantity(newQuantity + 1);
  };





  return (
    <div>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
      </header>
      <div class="flex items-center justify-between bg-black -mx-8 -px-6 py-5">
              <span class="font-bold text-sm text-gray-50"></span>      
              <span class="font-bold text-sm text-gray-50"></span>      
              <span class="font-bold text-sm text-gray-50">Name</span>      
              <span class="font-bold text-sm text-gray-50">Quantity</span>      
              <span class="font-bold text-sm text-gray-50">Price</span>      
              <span class="font-bold text-sm text-gray-50">Total Price</span>      
              <span class="font-bold text-sm text-gray-50"></span>      

      </div>
      <div className="mt-2">
        <ul className="space-y-4">
        <div class="flex items-center justify-between  -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
          {/* <!-- product --> */}
            <div class="w-20">
              <img class="h-24" src="https://i.ibb.co/Pr7rPmC/believe-black.png" alt=""/>
            </div>
            <div class="flex flex-col justify-center ml-4 flex-grow">
              <span class="font-bold text-md mb-1">Iphone 6S</span>
              <span class="font-bold text-sm">Iphone 6S</span>
            </div>
          </div>
          <div class="flex items-center justify-center mr-6 mt-2">
                <div className=' rounded'>
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      disabled={newQuantity === 1}
                      className={`${newQuantity === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} w-8 h-10 leading-10 text-gray-600 transition hover:opacity-75`}
                    >-
                    </button>
                    <input
                      type="number"
                      id="Quantity"
                      value={newQuantity}
                      class=" w-8 h-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      onClick={increaseQuantity}
                      class="w-8 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                    >+
                    </button>
                    </div>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
          <button className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
        </div>

        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Cart;