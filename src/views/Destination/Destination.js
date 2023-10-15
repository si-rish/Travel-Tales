import "./Destination.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Form from '../../components/InputForm/form'
import ImageGallery from '../../components/ImageGallery/gallery'
import CardSection from '../../components/CardSection/Cardsection'
import CardSlider from '../../components/CardSlider/cardslider'
import CardInfo from '../../components/CardInfo/cardinfo'
import Footer from '../../components/Footer/Footer'
import BookingForm from "../../components/BookingForm/BookingForm"

export default function Destination() {
    return (
        <div>
            <Navbar />
            <div className="destination-main-img">
                <h1 className="hero_section-title fade-in-bottom"  ><br/><br /><br />Destinations </h1>

            </div>

            <p className='app-desc destination-app-desc'>Visit the breathtaking Taj Mahal in Agra, an exquisite symbol of love and architectural marvel. Explore the serene backwaters of Kerala for a tranquil escape amidst lush greenery and pristine waters.</p>

            {/* <Form/> */}
            <hr className="destination-hr" />
            <BookingForm />
            <h1 className="destination-descrpition description">Explore Real Adventure</h1>
            <p className="caption destination-caption">
                A traveler is an individual who explores different places, cultures, and experiences, often seeking adventure and personal growth through their journeys. They possess a spirit of wanderlust and a curiosity for the world beyond their own borders.
            </p>
            <div class="search-container">
                <input class="search-input" type="text" placeholder="Search" />
                <button class="search-button">Search</button>
            </div>

            <hr className="destination-hr" />
            <ImageGallery />
            <p className="caption destination-caption image-gall">
            Explore the world through captivating images of stunning landscapes and vibrant<br/> cultures in our travel image gallery. Let your wanderlust soar with each click.
            </p>

            <hr className="destination-hr" />

            <h1 className="destination-descrpition description">Top Trending Destinations</h1>
            <CardInfo />
            <hr className="destination-hr" />
            <h2 className="destination-descrpition description"><b>Explore Top Destination by Region</b></h2>
            <CardSlider />

            <hr className="destination-hr" />

            <CardSection />
            <Footer />
        </div>
    )
}




