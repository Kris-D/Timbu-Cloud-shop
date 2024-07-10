import React from 'react'
import styles from "./Cart.module.css";
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const Back = () => {
    return navigate("/");
  }
  return (
    <div className={styles.wrap}>
    <div className={styles.carthead}>
      <div className={styles.cartheadbody} onClick={() => Back() }>
      <FaAngleLeft/>
      <p>Continue Shopping</p>
      </div>
    
    </div>

    </div>
  )
}

export default Cart