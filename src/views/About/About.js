
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'


export default function About()  {
    return(
        <div className="About-Container">
            <Navbar/>
             <h1>Our History</h1>
            <p  className="About-Text">
                Trippy is Owned and managed by Trippy in Pvt.Ltd, a leading brand in web designing
                service and e-commerce solution. Trippy in Pvt.Ltd, is counted for web solutions 
                and its top ranking business portals. Our invincible exportise has raised our spirit
                to reach ahead from our client's expectation. commendable success rate of others portals
                 managed by Trippy is a live paradigm of our work.
            </p>
            
            <h1>Our Mission</h1>
            <p className="About-Text">
                Our Mission is to touch the horizon where our capabiities may successfully meet with
                the requirements of our client's, that too with ultimate transparency and cost-
                effectiveness..
            </p>

            <h1>Our Vission</h1>
            <p className="About-Text">
                To saw the seeds of par-excellence services with customer centric approach and reap the
                trust of worldwide client's.
            </p>
        </div>
        
    )
    
}