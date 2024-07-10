import React from 'react'
import styles from "./Cart.module.css";
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {cartlist } from '../../components/tabledata';
import { GoTrash } from 'react-icons/go';
import { CgAddR } from 'react-icons/cg';
import { RiCheckboxIndeterminateLine } from 'react-icons/ri';
const Cart = () => {
  const navigate = useNavigate();
  const Back = () => {
    return navigate("/");
  }
  const accountCreation = () => {
    return navigate("/accountCreation");
  }
  return (
    <div className={styles.wrap}>
    <div className={styles.carthead}>
      <div className={styles.cartheadbody} onClick={() => Back() }>
      <FaAngleLeft/>
      <p>Continue Shopping</p>
      </div>
    </div>
    <div className={styles.cartheadTop}>
      <p>Shopping cart</p>
      <span>You have 3 item in your cart</span>
    </div>
     <div className={styles.cartlist}>
      {cartlist.map(cart =>( 
        <div key={cart.id} className={styles.cartitem}>
          <div className={styles.cartbody}>
          <div className={styles.cartimg}>
             <img src={cart.img} alt={cart.name} width={200} height={179} />
          </div>
           <div className={styles.cartText}>
            <div className={styles.cartTextTop}>
            <p>{cart.name}</p>
            <p>{cart.price}</p>
            </div>
           <div className={styles.cartTrash}>
           <GoTrash />
            <div className={styles.cartadd}>
            <RiCheckboxIndeterminateLine />
              <p>1</p>
            <CgAddR />
            </div>
           </div>
           </div>
          </div>
          
        </div>
      ))}
     </div>
     <div className={styles.cartfooter}>
     <div className={styles.checkout} onClick={() => accountCreation() }>
      <span>CHECKOUT (N15,000)</span>
     </div>
     </div>
     

    </div>
  )
}

export default Cart