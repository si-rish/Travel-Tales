import React, {useState} from 'react'
import "./Blogs.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Blogs()  {
    const[Blogs,setBlogs]=React.useState([
      {
        name:'Shreya',
        date:11/10/2023,
        Blog:'Out of Town Blog is a travel, food, and lifestyle online magazThis trave Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
      {
        name:'Shreya',
        date:11/10/2023,
        Blog:'Out of Town Blog is a travel, food, and lifestyle online magazThis travel Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
      {
        name:'Shreya',
        date:11/10/2023,
        Blog:'Out of Town Blog is a travel, food, and lifestyle online magazThis travelOut of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
      {
        name:'Shreya',
        date:11/10/2023,
        Blog:'Out of Town Blog is a travel, food, and lifestyle online magazThis travelOut of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.', 
      },
    ]);





    return(
        <div>
            <Navbar/>
            <h2 className="heading1">To Travel 🧳 is to Live..!✈️</h2>
            <div className="division1">
               <div className="division2">
               <h2 className="heading2">Inspiring Travel Blogs</h2>
               <div >
                 {
                    Blogs.map((Blog,index)=>{
                        
                       return(
                        <div className='BlogCard'>
                            <p className='blog-name'>{Blog.name}</p>
                            <p className='blog-name'>{Blog.date}</p>
                            <p className='blog-name'>{Blog.blog}</p>
                            </div>
                       )
                    })
                    
                 }
               </div>
            
            
                    
                       
            
                </div>
                 
               
               

            
        



               <div className="division4">
                <h2 className="heading3">Share Your Travel Experience With Us</h2>

               </div>
            </div>
           <Footer />
    
        </div>
    )
    
}