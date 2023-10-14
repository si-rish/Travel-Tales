import "./Destination.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Form from '../../components/InputForm/form'
import ImageGallery from '../../components/ImageGallery/gallery'
import CardSection from '../../components/CardSection/Cardsection'
import CardSlider from '../../components/CardSlider/cardslider'
import CardInfo from '../../components/CardInfo/cardinfo'
import Footer from '../../components/Footer/Footer'

export default function Destination() {
    return(
        <div>
           <Navbar/>
            <div className="header-main-img">
            <h1 className="text-header fade-in-bottom"  ><b>Destination</b></h1>
               
           </div>
         
            <Form/>
            <h1 className="title1"><b>Explore Real Adventure</b></h1>
           <ImageGallery/>
           <input className="search" type="searchbar" placeholder="Search..." ></input>
              <h1 className="title2"><b>Top Trending Destinatins </b></h1>
              <CardInfo/>
              <h2 className="title3"><b>Explore Top Destination by Region</b></h2>
            <CardSlider/> 
            
            <CardSection/>
            <Footer />
        </div>
)
}
    
    
    

