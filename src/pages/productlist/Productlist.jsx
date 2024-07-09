import React from 'react'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import styles from "./Productlist.module.css";
import logo from "../../assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {productlist } from '../../components/tabledata';
import { IoMdStarOutline } from 'react-icons/io';
const Productlist = () => {
  return (
    <div className={styles.wrap}>
     <div className={styles.head}>
      <div className={styles.logocart}>
       <img src={logo} alt="shop-logo" />
       <div className= {styles.icons}>
       <CiSearch />
       <CiUser />
       <CiShoppingCart/>
       </div>
      </div>
     </div>
     <div className={styles.filterbyproduct}>
       <div className={styles.filterbyproducthead}>
         <p>Filter by</p>
         <div className={styles.headboxes}>
         <div className={styles.filterbox}>
                <span>Price</span>
                <MdOutlineKeyboardArrowDown />
              </div>
         <div className={styles.filterbox}>
                <span>Rating</span>
                <MdOutlineKeyboardArrowDown />
              </div>
         <div className={styles.filterbox3}>
                <span>Best Sellers</span>
                <MdOutlineKeyboardArrowDown />
              </div>
         </div>
       </div>
       <div className={styles.productlist}>
       {productlist.map(product => (
        <div key={product.id} className={styles.productitem}>
          <img src={product.img} alt={product.name} width={240} height={200} />
          <div className="">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{Array.from({ length: product.star}).map((_, index) => (
              <IoMdStarOutline key={index} />
            ))}</p>
          </div>
        </div>
      ))}
       </div>

     </div>

    </div>
  )
}

export default Productlist