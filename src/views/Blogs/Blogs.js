import React, {useState, useEffect} from 'react'
import "./Blogs.css"
import Navbar from '../../components/Navbar/Navbar'
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';
import img1 from '../../components/Image/travel_HD.jpg';




export default function Blog()  {
    const[blog,setBlogs]=React.useState([
      {
        name:'Shreya Kar',
        date:11-6-2023,
        blog:'=>Out of Town Blog is a travel, food, and lifestyle online magazThis trave Out of Town Blog is a travel, food, and lifestyle online magazine. This travel blog started as a site where the publisher shares his personal travel experiences, photographs and travel tips to his friends, relatives, and online readers. Today, Out of Town Blog showcases travel tales, food reviews, hotel guides and reviews, travel destination guides and other travel-related inputs from various contributors from all over the world.',
      },
     
     
     
    ]);

    const [Count, setCount] = useState(0);

  function showcountvalue() {
  }
  useEffect(showcountvalue, [Count])

  function increase() {
    setCount(Count + 1)

  }


  const [name,setName] = useState('');
  const [date,setDate] = useState('');

  const [message,setMessage]= useState('');


  const addBlock = () => {
           const obj = {
            name:name,
            date:date,
            message:message,
           }
           setBlogs([...blog, obj])

           showToast('Your Blog has added successfully !','success',3000)

           setName('');
           setDate('');
           setMessage('');
          
  };

    return(
        <div>
            <Navbar/>
            <div className="header-image">

           <h1 className="fade-in-bottom header-image">Blogs</h1>
           </div>
           
           
            
           

             <p className='hide'>A blog is a digital platform where individuals or organizations share written
             content, often in the form of articles, posts , essays . It serves as a space for sharing information
             , options, experiences, and expertise on a wide range of topics, catering to various interests and audiences.
             Blogs can be personal diaries, educational resources, marketing tools, or sources of entertainment, making them a 
             versatile medium for online communication. </p>
              
              
              < hr className='hr'>
                </hr>
              

        <div className="division1">

               <div className="division4">
                <h2 className="heading3">Share Your Journey with us</h2>
                <form>
                  <div className='name-date'>

                    
                  {name}
                   <input type='text' 
                   placeholder='Name' 
                   className='user-input'
                   onChange={(e)=>{
                    setName(e.target.value)
                   }}
                   value={name}
                   />
                   

                    
                    {date}
                   <input type='Date' 
                   className='user-input'
                   onChange={(e)=>{
                    setDate(e.target.value)
                   }}
                   value={date}
                   />
                  


                   </div>


                   {message}
                   <input
                   type='message'
                    placeholder='Blog'
                   className='user-input3'
                   onChange={(e)=>{
                    setMessage(e.target.value)
                   }}
                   value={message}
                   />
                   
                   
                        
                </form>
                <button type='button'
                 className='btn-add-blog'
                 onClick={addBlock}
                 >
                  ➕
                  </button>
               </div>
               </div>
               
            


            <hr className='hr1'>
            
            </hr>

            <div className="division2">
               <h2 className="heading2">Inspiring Travel Blogs</h2>
                 {
                   blog.map((blog, index)=>{
                       return (
                         <div className='BlogCard'>
                          <p className='blog-name m-2'>🎒{blog.name}</p>
                          <date className='blog-date m-2' >📅{blog.date}</date>
                          <p className='blog-blog m-2'>🖼️{blog.blog}</p>
                          <div className='like-division'>
                            <div className='comment'>💬 Comment</div> 
                            <div className='like'><button onClick={increase} className='button'>❤️</button>
                            <span className="span"> {Count} </span></div>
                          </div>
                       </div>
                       
                       
                        
                       )

                       })
                       
                    
                      }
                      </div>
                    
                  
                  <Footer />
             
                </div>
              
        
    )
    
}
