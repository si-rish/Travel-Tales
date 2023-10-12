import React, {useState, useEffect} from 'react'
import "./Blogs.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


export default function Blog()  {
    const[blog,setBlogs]=React.useState([
      {
        name:'Shreya',
        date:11-6-2023,
        blog:'=>Out of Town Blog is a travel, food, and lifestyle online magazThis trave Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
      {
        name:'Payal',
        date:11-10-2023,
        blog:'=>Out of Town Blog is a travel, food, and lifestyle online magazThis travel Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
      {
        name:'saru',
        date:11-11-2023,
        blog:'=>Out of Town Blog is a travel, food, and lifestyle online magazThis travelOut of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
     
     
    ]);

    const [Count, setCount] = useState(0);

  function showcountvalue() {
  }
  useEffect(showcountvalue, [Count])

  function increase() {
    setCount(Count + 1)

  }



    return(
        <div>
            <Navbar/>
            <h2 className="heading1">To Travel 🧳 is to Live..!✈️</h2>
            <div className="division1">
               <div className="division2">
               <h2 className="heading2">Inspiring Travel Blogs</h2>
                 {
                   blog.map((blog, index)=>{
                       return (
                         <div className='BlogCard'>
                          <p className='blog-name m-2'>🎒{blog.name}</p>
                          <date className='blog-date m-2'>📅{blog.date}</date>
                          <p className='blog-blog m-2'>🖼️{blog.blog}</p>
                          <div className='like-division'>
                            <div className='comment'>💬 Comment</div> 
                            <div className='like'><button onClick={increase} className="button-ind">+</button>
                            <span className="count-text"> {Count} </span></div>
                          </div>
                         </div>
                       )

                       })
                    
                    
                 }
            
               </div>
            
            
                    
                       
            
        
                 
               
               

            
        



               <div className="division4">
                <h2 className="heading3">Share Your Travel Experience With Us..</h2>
                <form>
                
                         

                        
                </form>

               </div>
            </div>
           <Footer />
    
        </div>
    )
    
}