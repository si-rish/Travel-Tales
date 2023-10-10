import React, { useState, useEffect } from "react";
import "./Shop.css"
import Navbar from '../../components/Navbar/Navbar'
import img1 from './Shop images/Passport cover.jpg'
import img2 from './Shop images/51PvkeIDBNL._SY300_SX300_.jpg'
import img3 from './Shop images/Cloth mask.jpg'
import img4 from './Shop images/Dettol Disinfectant Sanitizer.jpg'
import img5 from './Shop images/Metal Luggage Weighing Scale.jpg'
import img6 from './Shop images/keyless locker.jpg'
import img7 from './Shop images/Shampoo Cream Lotion  container1.jpg'
import img8 from './Shop images/Thigh Bag.jpg'
import img9 from './Shop images/Toothbrush & Toothpaste Holder.jpg'
import img10 from './Shop images/Travel Dispenser Bottle Set Travel.jpg'
import img11 from './Shop images/Travel cosmetic makeup organizer.jpg'
import img12 from './Shop images/Travelling Gym Shoe Storage Bag.jpg'
import img13 from './Shop images/Umbrella.jpg'
import img14 from './Shop images/Waist Bag for Men.jpg'
import img15 from './Shop images/vaccum bags.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

export default function Shop() {


  const [Count, setCount] = useState(0);

  function showcountvalue() {
  }
  useEffect(showcountvalue, [Count])

  function increase() {
    setCount(Count + 1)

  }
  function decrease() {
    setCount(Count - 1)

  }
  return (
    <div >
      <Navbar />
      <div className="main-img">

        <p className="img-txt">Experience the world, with our travel shopping tools....!</p>
        <h3 className="img-sub-text">Our shopping service for traveller....<FaShoppingCart /></h3>

      </div>

      <div className="main-container">

        <div className="product-card">
          <img src={img1} className="product-img" />
          <h3 className="card-text">Passport Holder </h3>

          <p className="sub-text">Polyester Passport Cover | Travel Organizer for men & women</p>
          <div class="price-details">
            <h3>₹ 100 </h3>
            <h4> <del>150</del></h4>
            <h4 className="off-text">(25% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div >
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>

          </div>

          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>

        <div className="product-card">
          <img src={img2} className="product-img" />
          <h3 className="card-text">Neck Pillow for Travelling  </h3>

          <p className="sub-text">Comfortable Head Rest Neck Holder Pillow with 30 Years Warranty</p>
          <div class="price-details">
            <h3>₹ 1000 </h3>
            <h4> <del>1500</del></h4>
            <h4 className="off-text">(25% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>

        <div className="product-card">
          <img src={img3} className="product-img" />

          <h3 className="card-text"> Reusable & Washable Mask </h3>

          <p className="sub-text"> Cotton 3 Layered Cloth Mask (Charcoal Black - Pack of 2,)</p>
          <div class="price-details">
            <h3>₹ 300</h3>
            <h4> <del>450</del></h4>
            <h4 className="off-text">(75% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>

        <div>
          <div className="product-card">
            <img src={img4} className="product-img" />

            <h3 className="card-text">Dettol Disinfectant Sanitizer</h3>

            <p className="sub-text"> Wet Wipes for Skin & Surfaces & Body Wash and Shower Gel </p>
            <div class="price-details">
              <h3>₹ 410</h3>
              <h4> <del>500</del></h4>
              <h4 className="off-text">(25% off)</h4>
            </div>
            <div className="ind-container">
              <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
              <div>
                <button onClick={increase} className="button-ind">+</button>
                <span className="count-text"> {Count} </span>
                <button onClick={decrease} className="button-ind">-</button>
              </div>
            </div>
            <div className="btn-main">
              <button className="btn-card-Buy">Buy Now</button>
              <button className="btn-card-add">Add to Card</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={img5} className="product-img" />

          <h3 className="card-text">Metal Digital Portable Luggage </h3>

          <p className="sub-text">Metal Digital Portable Luggage Weighing Scale for Travel Bag </p>
          <div class="price-details">
            <h3>₹ 700 </h3>
            <h4> <del>1000</del></h4>
            <h4 className="off-text">(30% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img6} className="product-img" />

          <h3 className="card-text">Keyless Luggage Lock</h3>

          <p className="sub-text">Rangwell 4 Digit Combination Luggage Lock Mandatory for Lock </p>
          <div class="price-details">
            <h3>₹ 1000 </h3>
            <h4> <del>1500</del></h4>
            <h4 className="off-text">(25% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>

          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img7} className="product-img" />

          <h3 className="card-text">Shampoo & Lotion Container</h3>

          <p className="sub-text">Refillable Shampoo Cream Lotion Storage Plastic Container Bottle</p>
          <div class="price-details">
            <h3>₹ 200 </h3>
            <h4> <del>500</del></h4>
            <h4 className="off-text">(75% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>

          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img8} className="product-img" />

          <h3 className="card-text">Waist and Thigh Bag </h3>

          <p className="sub-text">Tiivra Wingman Tactical Waist and Thigh Bag in Yellow</p>
          <div class="price-details">
            <h3>₹ 475 </h3>
            <h4> <del>500</del></h4>
            <h4 className="off-text">(10% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img9} className="product-img" />

          <h3 className="card-text"> Toothbrush Toothpaste  Holder</h3>

          <p className="sub-text"> Portable Toothbrush Storage Plastic Toothbrush Holder , Multi-coloured</p>
          <div class="price-details">
            <h3>₹ 100 </h3>
            <h4> <del>150</del></h4>
            <h4 className="off-text">(15% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img10} className="product-img" />

          <h3 className="card-text">Travel Dispenser Bottle Set</h3>

          <p className="sub-text"> Travel Refillable Cosmetic Containers Set (Plastic) </p>
          <div class="price-details">
            <h3>₹ 99 </h3>
            <h4> <del>199</del></h4>
            <h4 className="off-text">(50% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>

        <div className="product-card">
          <img src={img11} className="product-img" />

          <h3 className="card-text">Cosmetic Makeup Organizer </h3>

          <p className="sub-text">   Storage Pouch Travelling Organizer Travel Bag Travel for Women </p>
          <div class="price-details">
            <h3>₹ 100 </h3>
            <h4> <del>150</del></h4>
            <h4 className="off-text">(25% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img12} className="product-img" />

          <h3 className="card-text">Shoe Bag Holds </h3>

          <p className="sub-text">Mossio 3 Pair of Shoes for Travel and Daily Use Storage Pouch</p>
          <div class="price-details">
            <h3>₹ 430 </h3>
            <h4> <del>500</del></h4>
            <h4 className="off-text">(35% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>

          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img13} className="product-img" />

          <h3 className="card-text">Auto Open and Close Umbrella</h3>

          <p className="sub-text">Umbrella for Women Auto Open Close Lightweight Umbrella</p>
          <div class="price-details">
            <h3>₹ 300 </h3>
            <h4> <del>500</del></h4>
            <h4 className="off-text">(45% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img14} className="product-img" />

          <h3 className="card-text"> Hunter Waist Bag </h3>

          <p className="sub-text"> Water/Scratch Resistant Anti-Theft Passport Bag for Travel</p>
          <div class="price-details">
            <h3>₹ 699 </h3>
            <h4> <del>1500</del></h4>
            <h4 className="off-text">(65% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>
        <div className="product-card">
          <img src={img15} className="product-img" />

          <h3 className="card-text">Vacuum Bags for Travel </h3>

          <p className="sub-text">Travel with  Packing Vacuum Storage Bags for Cloth Space Saver</p>
          <div class="price-details">
            <h3>₹ 300</h3>
            <h4> <del>500</del></h4>
            <h4 className="off-text">(25% off)</h4>
          </div>
          <div className="ind-container">
            <h3 className="star-txt" > <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></h3>
            <div>
              <button onClick={increase} className="button-ind">+</button>
              <span className="count-text"> {Count} </span>
              <button onClick={decrease} className="button-ind">-</button>
            </div>
          </div>
          <div className="btn-main">
            <button className="btn-card-Buy">Buy Now</button>
            <button className="btn-card-add">Add to Card</button>
          </div>
        </div>

      </div>
    </div>



  )

}