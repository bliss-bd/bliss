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

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);

    if (existingItem) {
      // If item already exists in the cart, update size and quantity
      const updatedItem = {
        ...existingItem,
        size: item.size,
        quantity: existingItem.quantity = item.quantity,
      };

      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem._id === item._id ? updatedItem : cartItem
      );

      setCartItems(updatedCartItems);
    } else {
      // Add item to the cart
      setCartItems([...cartItems, item]);
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
