import "./Shop.css"
import Navbar from '../../components/Navbar/Navbar'
import img1 from './Shop images/Passport cover.jpg'
import {AiFillStar} from 'react-icons/ai'
export default function Shop()  {
    return(
        <div>
            <Navbar/>
            <h1>Shop</h1>
            <div className="product-card">
              <img src={img1} className="product-img"/>
              <h3 className="card-text">Neck Pillow for Travelling  </h3>
              
              <p className="sub-text">Comfortable Head Rest Neck Holder Pillow with 30 Years Warranty (Grey)</p>
              <div class="price-details">
                    <h3>₹ 1000 </h3>
                   <h4> <del>1500</del></h4>
                   <h4 className="off-text">(25% off)</h4>
            </div>
             <h3 className="star-txt" > <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></h3>
              
              <div className="btn-main">
              <button className="btn-card-Buy">Buy Now</button>
              <button className="btn-card-add">Add to Card</button>
              </div>
            </div>
          </div>  
    
        
    )
    
}