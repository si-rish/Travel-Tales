import "./Destination.css"
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import Teant from '../../components/Image/Teant.png'
import Biking from '../../components/Image/Biking.png'
import Fishing from '../../components/Image/Fishing.png'
import Caravan from '../../components/Image/Caravan.png'
import Footer from '../../components/Footer/Footer'

export default function Destination()  {
    return(
        <div>
           
            <Navbar/>
            <div className="header-main-img">
        <HeroSection />
      </div>
           
            <h1 className="text">Destination</h1>

            <div className="container">
                <div className="input-frame">
                    <h2 className="heading">Check In</h2>
                    <input type="date" placeholder="Check In"/>
                </div>
                <div className="input-frame">
                    <h2 className="heading">Check Out</h2>
                    <input type="date" placeholder="Check Out"/>
                </div>
                <div className="input-frame">
                    <h2 className="heading">Guest</h2>
                    <input type="Guest" placeholder="Guest"/>
                </div>
                <div className="input-frame">
                    <h2 className="heading">Accomodation</h2>
                    <input type="" placeholder="Accomodation"/>
                </div>
            </div>
            <button className="btn">CHECK AVAILABILITY  </button>

            <div className="grid-wallpeper">
             <div>
               <img className="img h-200 w-400 "src="https://d3nn873nee648n.cloudfront.net/900x600/4551/19-SS126850.jpg" />
            </div>
            <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/17559/220-JK777611.jpg" alt="/"/>
             </div>   
             <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/17397/220-JH771041.jpg" alt="/"/>
             </div>
             <div>   
               <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/16030/220-HU669987.jpg" alt="/"/>
              </div>
              <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/18292/220-ES822775.jpg" alt="/"/>
              </div>
              <div> 
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/17832/220-BX790482.jpg" alt="/"/>
               </div>
               <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/10850/14-SM310542.jpg" alt="/"/>
            </div>
            <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/18293/120-ES823000.jpg" alt="/"/>
              </div>
              <div> 
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/16164/20-HV680295.jpg" alt="/"/>
               </div>
               <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/17556/17-JK777537.jpg" alt="/"/>
            </div>
            <div> 
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/16164/18-HV680307.jpg" alt="/"/>
               </div>
               <div>
                <img className="img"src="https://d3nn873nee648n.cloudfront.net/900x600/18839/19-SM868466.jpg" alt="/"/>
            </div>
        </div>
        <div className="redio-btn">
            <button className="buton"> ?? </button>
            <button id="buton"> 01</button>
            <button className="buton">02</button>
            <button className="buton">03</button>
            <button className="buton">04</button>
            <button className="buton">05</button>
            <button className="buton">??</button>
        </div>
        <div className="container">
            <div >
                <img className="video" src="https://d3nn873nee648n.cloudfront.net/900x600/17212/120-SM754546.jpg" alt="/"/>
            </div>
            <div className="card-componant">
            <div className="card">
                <img className="logo" src={Teant} alt="/"/>
                <h2>Tent Camping</h2>
                <h3>Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</h3>
            </div>
            <div className="card">
                <img className="logo" src={Biking} alt="/"/>
                <h2>Mountain Biking</h2>
                <h3>Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</h3>
            </div>
            <div className="card">
                <img className="logo" src={Fishing} alt="/"/>
                <h2>Fishing & Boat</h2>
                <h3>Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</h3>
            </div>
            <div className="card">
                <img className="logo" src={Caravan} alt="/"/>
                <h2>RV Caravan Tent</h2>
                <h3>Sit amet consectetur integ tincidunt scelerie nodermen malesuada sceleris massa</h3>
            </div>
           </div>
        </div>  

        <div class="containers">
        <h1>Top Trending Destinations</h1>
        <ul class="cards1">
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 1</h3>
                    <div class="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 2</h3>
                    <div class="card-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 3</h3>
                    <div class="card-content">
                        <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 4</h3>
                    <div class="card-content">
                        <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 5</h3>
                    <div class="card-content">
                        <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 6</h3>
                    <div class="card-content">
                        <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 7</h3>
                    <div class="card-content">
                        <p>Aliquam eget nisl auctor, sollicitudin ipsum at, dignissim ligula. Donec tincidunt in elit et pellentesque. Integer posuere metus ac massa mollis euismod.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 8</h3>
                    <div class="card-content">
                        <p> Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 9</h3>
                    <div class="card-content">
                        <p>Duis id congue turpis. Donec sodales porta felis, nec ultricies ante. Nam placerat vitae metus sit amet tempor. Aliquam ac dictum est.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 10</h3>
                    <div class="card-content">
                        <p>Pellentesque eget eros eget justo efficitur fermentum.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 11</h3>
                    <div class="card-content">
                        <p>Phasellus posuere nec nibh ut tincidunt. Aenean mollis turpis non eros posuere, at luctus leo hendrerit. Integer non libero sapien.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
            <li class="card1">
                <div>
                    <h3 class="card-title">Service 12</h3>
                    <div class="card-content">
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ornare metus ac lectus scelerisque volutpat.</p>
                    </div>
                </div>
                <div class="card-link-wrapper">
                    <a href="" class="card-link">Learn More</a>
                </div>
            </li>
        </ul>
    </div> 
            <Footer />
        </div>
    )
    
}
