import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";

export const userContext = createContext();
const auth = getAuth(app);


const Usercontexts = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);



  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Function to update an item's size in the cart
  const updateItemSize = (itemId, newSize) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item._id === itemId ? { ...item, size: newSize } : item
      )
    );
  };

  // Function to update an item's quantity in the cart
  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item._id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== itemId)
    );
  };



  const googleSingIn = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleSingIn);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

      /* Password recovr With Email*/
      const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    user,
    loading,
    register,
    updateUserProfile,
    googleLogin,
    signInUser,
    logout,
    forgetPassword,
    cartItems,
    addItemToCart,
    updateItemSize,
    updateItemQuantity,
    removeItemFromCart,

  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default Usercontexts;
