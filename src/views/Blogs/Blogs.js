import "./Blogs.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Blogs()  {
    return(
        <div>
            <Navbar/>
            <h2 className="heading1">To Travel 🧳 is to Live..!✈️</h2>
            <div className="division1">
               <div className="division2">
               <h2 className="heading2">Inspiring Travel Blogs</h2>
               <div className="division3">
                 <p>hello</p>
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