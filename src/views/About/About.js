
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import img from './about images/img1.webp'
import img1 from './about images/img.jpg'
import image1 from './about images/shanzey.jpg'
import image2 from './about images/prerna.jpg'
import image3 from './about images/snehal...jpg'
import image4 from './about images/Aakanksha.jpg'
import image5 from './about images/jayant.jpg'
import image6 from './about images/sirish.jpg'
import image7 from './about images/yash.jpg'

export default function About()  {
    return(
        <div >
            <Navbar/>
            
            <img src={img} className="image-2" />

            <div className="About-Container">
             <h1 className="heading">Our History</h1>

            <p  className="About-Text">
                Trippy is Owned and managed by Trippy in Pvt.Ltd, a leading brand in web designing
                service and e-commerce solution. Trippy in Pvt.Ltd, is counted for web solutions 
                and its top ranking business portals. Our invincible exportise has raised our spirit
                to reach ahead from our client's expectation. commendable success rate of others portals
                 managed by Trippy is a live paradigm of our work.Travel dates back to antiquity where 
                 wealthy Greeks and Romans would travel for leisure to their summer homes and villas in
                  cities such as Pompeii and Baiae.
            </p>
            
            <h1 className="heading">Our Mission</h1>
            <p className="About-Text">
                Our Mission is to touch the horizon where our capabiities may successfully meet with
                the requirements of our client's, that too with ultimate transparency and cost-
                effectiveness..
                Our Mission is to perform and deliver excellent quality service to our clients.
                 Providing them unforgettable travel, enjoyable, with guaranteed services that exceed their expectations With this objective,
                 we aim to earn the reputation as "Your Preferred Travel Agency".
            </p>

            <h1 className="heading">Our Vission</h1>
            <p className="About-Text">
                To saw the seeds of par-excellence services with customer centric approach and reap the
                trust of worldwide client's.<br></br>
                To create a world, where everyone is encouraged to travel.To ensure that our clients live memorable experiences and 
                fulfill their dreams and goals through travel.
            </p>
            </div>
           

            <h1 className="heading">Our Team's</h1>
            <div className="main-container">
                <div className="cards">
                <img src={image1} className="image team-member-img"/>
                <hr></hr>
                <div className="info">
                Hello..!!<br></br>
                I am prerna barde<br></br>
                pursuing bsc IT 2nd year<br></br>
                sadabai raisoni women's college,nagpur
                </div>
            </div>

            <div className="cards">
                <img src={image2} className="team-member-img image"/>
                <hr></hr>
                <div className="info">
                Hello..!!<br></br>
                 I am shanzey Shaikh<br></br>
                  from Parikrama College of Engineering HSBPVTGOI COE,Kashti,
                  Shrigonda, Ahmednagar.
                 
                 
                </div>
            </div>

            <div className="cards">
                <img src={image3} className="team-member-img image img3"/>
                <hr></hr>
                <div className="info">
                Hello..!!<br></br>
                 I am Snehal Parate<br></br>
                 pursuing BCA 3rd yr from<br></br>
                 from G.H Raisoni University,Amravati
                 
                </div>
            </div>
            </div>
            
            <div className="main-container">
                <div className="cards">
                <img src={image4} className="team-member-img image"/>
                <hr></hr>
                <div className="info">
                Hello..!!<br></br>
                I am Akanksha Dattatraya<br></br>
                pursuing  TE Computer Engeeniring <br></br>
                from Parikrama college Of engeeniring Kashti
                </div>
            </div>

            <div className="cards">
                <img src={image5} className="team-member-img image"/>
                <hr></hr>
                <div className="info">
                Hello.!!<br></br>
                I am  Jayant Sarve<br></br>
                pursuing MCA<br></br>
                from G.H Raisoni University,Amravati
                 
                </div>
            </div>

            <div className="cards">
                <img src={image6} className="team-member-img image"/>
                <hr></hr>
                <div className="info">
                 Hello..!!<br></br>
                 I am Shirish meshram<br></br>  
                 pursuing BCA 3rd yr from<br></br>
                 from G.H Raisoni University,Amravati
                 
                </div>
            </div>
            </div>

            <div className="container">
                <div className="cards">
                <img src={image7} className="team-member-img image"/>
                <hr></hr>
                <div className="info">
                Hello..!!<br></br>
                 I am Yash Chaudhari<br></br>  
                 pursuing BCA 3rd yr from<br></br>
                 from G.H Raisoni University,Amravati
                </div>
            </div>
            </div>
          <Footer/>
            </div>
    
    )
    
}