import React, { useState, useEffect } from "react";
import "./Shop.css"
import Navbar from '../../components/Navbar/Navbar'

import bag1 from './Shop images/bag1.jpg'
import bag2 from './Shop images/bag2.1.jpg'
import bag3 from './Shop images/bag3.jpg'
import bag4 from './Shop images/bag4.jpg'
import electronic1 from './Shop images/electronic1.jpg'
import electronic2 from './Shop images/electronic2.jpg'
import electronic3 from './Shop images/electronic3.jpg'
import electronic4 from './Shop images/electronic4.jpg'
import snacks1 from './Shop images/snacks1.jpg'
import snacks2 from './Shop images/snacks2.jpg'
import snacks3 from './Shop images/snacks3.1.jpg'
import snacks4 from './Shop images/snacks4.jpg'
import clothes1 from './Shop images/clothes1.jpg'
import clothes2 from './Shop images/clothes2.1.jpg'
import clothes3 from './Shop images/clothes3.jpg'
import clothes4 from './Shop images/clothes4.jpg'
import book1 from './Shop images/book1.jpg'
import book2 from './Shop images/book2.jpg'
import book3 from './Shop images/book3.jpg'
import book4 from './Shop images/book4.jpg'
import ess1 from './Shop images/ess1.jpg'
import ess2 from './Shop images/ess2.jpg'
import ess3 from './Shop images/ess3.1.jpg'
import ess4 from './Shop images/ess4.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import Footer from '../../components/Footer/Footer'
export default function Shop() {


  return (
    <div >
      <Navbar />
      <div className="main-img-shop">

        <p className="main-img-txt">Experience the world, with our travel shopping tools....!</p>
        <h3 className="img-sub-text">Our shopping service for traveller....<FaShoppingCart /></h3>

      </div>

      <div className="shop-main-container">
     
 <h3 className="section-pname-bags">BAGS</h3>
    <div className="shoppings-main">
        <div className="shop-product-card">
          <img src={bag1} className="shopping-objects" />
          <h3 className="shop-name-text">SkyBag Cardiff </h3>
          <div class="shop-product-price-details">
            <h4>₹ 1000 </h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={bag2} className="shopping-objects" />
          <h3 className="shop-name-text">Safari Accord</h3>
          <div class="shop-product-price-details">
            <h4>₹ 900 </h4>
            <del><h5>1000</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={bag3} className="shopping-objects" />
          <h3 className="shop-name-text">RuckSuck Bag</h3>
          <div class="shop-product-price-details">
            <h4>₹ 799</h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(55% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={bag4} className="shopping-objects" />
          <h3 className="shop-name-text">Duffel Bag</h3>
          <div class="shop-product-price-details">
            <h4>₹ 1000 </h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(55% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>
<h3 className="section-pname">CLOTHES</h3>    
<div className="shoppings-main">
        <div className="shop-product-card">
          <img src={clothes1} className="shopping-objects" />
          <h3 className="shop-name-text">Passport Holder </h3>
          <div class="shop-product-price-details">
            <h4>₹ 1200</h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={clothes2} className="shopping-objects" />
          <h3 className="shop-name-text">Women Jacket </h3>
          <div class="shop-product-price-details">
            <h4>₹ 786</h4>
            <del><h5>1000</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={clothes3} className="shopping-objects" />
          <h3 className="shop-name-text">MultiPocket Jacket </h3>
          <div class="shop-product-price-details">
            <h4>₹ 650 </h4>
            <del><h5>800</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={clothes4} className="shopping-objects" />
          <h3 className="shop-name-text">FullSleeve Jacket</h3>
          <div class="shop-product-price-details">
            <h4>₹ 1000 </h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>

    <h3 className="section-pname">TRAVEL ESSENTIAL</h3>
    <div className="shoppings-main">
        <div className="shop-product-card">
          <img src={ess1} className="shopping-objects" />
          <h3 className="shop-name-text">Vaccum Storage </h3>
          <div class="shop-product-price-details">
            <h4>₹ 650</h4>
            <del><h5>1000</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={ess2} className="shopping-objects" />
          <h3 className="shop-name-text">Shampoo container </h3>
          <div class="shop-product-price-details">
            <h4>₹ 280 </h4>
            <del><h5>500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={ess3} className="shopping-objects" />
          <h3 className="shop-name-text">Perfume Paper</h3>
          <div class="shop-product-price-details">
            <h4>₹ 500</h4>
            <del><h5>1000</h5></del>
            <h5 className="off-text">(50% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={ess4} className="shopping-objects" />
          <h3 className="shop-name-text">Medicine Pouch</h3>
          <div class="shop-product-price-details">
            <h4>₹ 890</h4>
            <del><h5>1000</h5></del>
            <h5 className="off-text">(20% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>
<h3 className="section-pname">ELECTRONICS</h3>
<div className="shoppings-main">
        <div className="shop-product-card">
          <img src={electronic1} className="shopping-objects" />
          <h3 className="shop-name-text">Fast Charger</h3>
          <div class="shop-product-price-details">
            <h4>₹ 1500 </h4>
            <del><h5>2500</h5></del>
            <h5 className="off-text">(45% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={electronic2} className="shopping-objects" />
          <h3 className="shop-name-text">Wireless Charger</h3>
          <div class="shop-product-price-details">
            <h4>₹ 2000 </h4>
            <del><h5>3500</h5></del>
            <h5 className="off-text">(55% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={electronic3} className="shopping-objects" />
          <h3 className="shop-name-text">AirPorts Pro2</h3>
          <div class="shop-product-price-details">
            <h4>₹ 3000 </h4>
            <del><h5>4500</h5></del>
            <h5 className="off-text">(40% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={electronic4} className="shopping-objects" />
          <h3 className="shop-name-text">Digitek GoCAM</h3>
          <div class="shop-product-price-details">
            <h4>₹ 900</h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(10% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>

    <h3 className="section-pname">SNACKS</h3>
    <div className="shoppings-main">
        <div className="shop-product-card">
          <img src={snacks1} className="shopping-objects" />
          <h3 className="shop-name-text">Bingo Snacks</h3>
          <div class="shop-product-price-details">
            <h4>₹ 100</h4>
            <del><h5>150</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={snacks2} className="shopping-objects" />
          <h3 className="shop-name-text">Banana Chips</h3>
          <div class="shop-product-price-details">
            <h4>₹ 310 </h4>
            <del><h5>500</h5></del>
            <h5 className="off-text">(45% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={snacks3} className="shopping-objects" />
          <h3 className="shop-name-text">Chocos Fills</h3>
          <div class="shop-product-price-details">
            <h4>₹ 455</h4>
            <del><h5>600</h5></del>
            <h5 className="off-text">(35% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={snacks4} className="shopping-objects" />
          <h3 className="shop-name-text">Biscuit Pack</h3>
          <div class="shop-product-price-details">
            <h4>₹ 300 </h4>
            <del><h5>500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>
    <h3 className="section-pname">BOOKS AND GUIDES</h3>

    <div className="shoppings-main">
        <div className="shop-product-card">
          <img src={book1} className="shopping-objects" />
          <h3 className="shop-name-text">Rich Dad</h3>
          <div class="shop-product-price-details">
            <h4>₹ 1000 </h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={book2} className="shopping-objects" />
          <h3 className="shop-name-text">The Things</h3>
          <div class="shop-product-price-details">
            <h4>₹ 350</h4>
            <del><h5>500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
      <div className="shop-product-card">
          <img src={book3} className="shopping-objects" />
          <h3 className="shop-name-text">You Can</h3>
          <div class="shop-product-price-details">
            <h4>₹ 450 </h4>
            <del><h5>600</h5></del>
            <h5 className="off-text">(45% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>

      <div className="shop-product-card">
          <img src={book4} className="shopping-objects" />
          <h3 className="shop-name-text">Growth & Wealth</h3>
          <div class="shop-product-price-details">
            <h4>₹ 1300 </h4>
            <del><h5>1500</h5></del>
            <h5 className="off-text">(25% off)</h5>
          </div>
          <div className="button-ab">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
      </div>
    </div>

       </div>
      <Footer/>
    </div>

  

  )

}