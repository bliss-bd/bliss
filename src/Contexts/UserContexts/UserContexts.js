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
import app from '../../Firebase/firebase.config'

export const userContext = createContext();
const auth = getAuth(app);


const Usercontexts = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);




  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id === item._id && cartItem.size === item.size
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const existingItem = updatedCartItems[existingItemIndex];
      existingItem.quantity = item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };


  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  const getSubtotal = (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    return item ? item.quantity * item.price : 0;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + getSubtotal(item._id), 0);
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
    addToCart,
    removeFromCart,
    getTotalPrice,
    getSubtotal

  };
  return <userContext.Provider value={info}>{children}</userContext.Provider>;
};

export default Usercontexts;

