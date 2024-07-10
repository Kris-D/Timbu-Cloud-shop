import React from 'react'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import styles from "./Productlist.module.css";
import logo from "../../assets/logo.svg";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {productlist } from '../../components/tabledata';
import { IoMdStarOutline } from 'react-icons/io';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { BsVimeo } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Productlist = () => {
  const navigate = useNavigate();
  const cart = () => {
    return navigate("/cart")
  }

  return (
    <div className={styles.wrap}>
     <div className={styles.head}>
      <div className={styles.logocart}>
       <img src={logo} alt="shop-logo" />
       <div className= {styles.icons}>
       <CiSearch size={20}/>
       <CiUser size={20}/>
       <CiShoppingCart onClick={() => cart()} style={{cursor:"pointer"}} size={20}/>
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
          <img src={product.img} alt={product.name} width={240} height={200} style={{backgroundColor:"white", borderRadius:"10px"}}/>
          <div className={styles.productitembody}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{Array.from({ length: product.star}).map((_, index) => (
              <IoMdStarOutline key={index} />
            ))}</p>
          </div>
          <div className={styles.addcart}>
          <span>Add to Cart</span>
          </div>
        </div>
      ))}
       </div>

     </div>
     <div className={styles.productFooter}>
      <div className={styles.productFooterhead1}>
        <p className={styles.footerHead}>Service-Hotline</p>
         <span>Telefonische Beratung unter:</span>
         <p>+49(0)771 / 175 131 69</p>
         <div className={styles.subfooterHead}>
          <p>Montag - Freitag:</p>
          <p>08:00 - 12.00 Uhr</p>
          <p>13.00 - 17:00 Uhr</p>
         </div>
      </div>
      <div className="">
        <p className={styles.footerHeadcompany}>Our Company</p>
      <div className={styles.subfootercompany}>
        <hr />
        <div className={styles.subfootercompanybody}>
        <p>About Us</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <div className={styles.footersoical}>
        <FaTwitter/>
        <FaFacebook/>
        <RiInstagramFill/>
        <FaYoutube/>
        <BsVimeo/>
        </div>
        </div>
      </div>
       
      </div>
     </div>

    </div>
  )
}

export default Productlist