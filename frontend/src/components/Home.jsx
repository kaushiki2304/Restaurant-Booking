import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Footer.jsx'
import "./Home.css"
import "./ListRestaurants.jsx"
import { Collapse, initMDB } from 'mdb-ui-kit';
import { Tilt } from 'react-tilt'
initMDB({ Collapse });

import Footer from './Footer.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function App() {
  return (
    <div>

        <div className="bg-image p-5 text-center shadow-1-strong mb-5 text-white home-header"
        style={{backgroundImage:'url("https://digital-photography-school.com/wp-content/uploads/2018/01/Charcuterie_Darina-Kopcok.jpg")' }} >

        <h1 className="my-5 display-5 fw-bold ls-tight text-center"
                  style={{ color: "hsl(215, 90.89%, 90.98%)" }}>
                  "Good food makes us feel happy! "

                </h1>
                <p
                  className="mb-4 opacity-90"
                  style={{ color: "hsl(213, 90.22%, 90.45%)" }}
                >
                  If you’re sad head toward your nearest resturant, it will make you feel better.

                </p>
                <br/>
                <div className="pt-1 mb-4">
                  {/* <button
                    className="btn btn-info"
                    type="submit"
                  >
                    Book A Table
                  </button> */}
                  <Link to="/ListRestaurants" className="btn btn-primary">
                  Book A Table
                </Link>
                </div>
          </div>

        <AboutUs/>

        <div className="container mt-2 text-center"><h2>Gallery</h2>
        <h5>Cherish these memories with us</h5>
        </div>

        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row px-4">
              <div className="col-4 ">
                <div className="card">
                  
                    <img src='https://i.pinimg.com/564x/57/f8/63/57f863cddd4d64c810a2a169a4e7bd94.jpg' className='d-block w-100 img' alt='...' height='550px' />
                 
                </div>
              </div>
              <div className="col-4"> <div className="card">
                
                  <img src='https://i.pinimg.com/564x/3a/4a/51/3a4a5166cc895a3281ab0527fc62b201.jpg' className='d-block w-100 img' alt='...' height='550px' />
               
              </div></div>
              <div className="col-4"> <div className="card">
                
                  <img src='https://i.pinimg.com/564x/a4/63/a0/a463a02e8a96ff5b5a6eade26cb1d833.jpg' className='d-block w-100 img' alt='...' height='550px' />
                
              </div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row px-4">
              <div className="col-4">
                <div className="card">
                  
                    <img src='https://i.pinimg.com/564x/2b/af/e7/2bafe7a4421356aef1ef5a650ecc467f.jpg' className='d-block w-100 img' alt='...' height='550px' />
                  
                </div>
              </div>
              <div className="col-4"> <div className="card">
                
                  <img src='https://i.pinimg.com/736x/c9/07/9d/c9079d25d2278acd93cf9f7d53d38294.jpg' className='d-block w-100 img' alt='...' height='550px' />
                
              </div></div>
              <div className="col-4"> <div className="card">
                
                  <img src='https://i.pinimg.com/564x/d9/2f/1f/d92f1fe102a4a4a6f6557aa7176b0814.jpg' className='d-block w-100 img' alt='...' height='550px' />
                
              </div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row px-4">
              <div className="col-4">
                <div className="card">
                  
                    <img src='https://i.pinimg.com/564x/ab/37/7d/ab377d26c2cd2258b5d4f6c2738d88cd.jpg' className='d-block w-100 img' alt='...' height='550px' />
                  
                </div>
              </div>
              <div className="col-4"> <div className="card">
                
                  <img src='https://i.pinimg.com/736x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg' className='d-block w-100 img' alt='...' height='550px' />
                
              </div></div>
              <div className="col-4"> <div className="card">
               
                  <img src='https://i.pinimg.com/564x/a0/16/ff/a016ff16828c5a29820b1f429e5ab19c.jpg' className='d-block w-100 img' alt='...' height='550px' />
                
              </div></div>
            </div>
          </SwiperSlide>


        </Swiper>

        {/* <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <div></div>
    </Tilt> */}
     
        <div className="container text-center mt-5">
          <div className="row align-items-start">
           
            <div className="col">
            <Tilt options={defaultOptions} >
              <div className="card" style={{ width: "18rem" }}>
              <img src="https://i.pinimg.com/564x/54/49/e9/5449e990efd86c53a75a6b0c707d2fac.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Special Discounts</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Link to="/ListRestaurants" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            </Tilt>
            </div>

            
            <div className="col">
            <Tilt options={defaultOptions} >
              <div className="card" style={{ width: "18rem" }}>
              <img src="https://i.pinimg.com/564x/37/cc/18/37cc18c6a6d478a584cc6b5acee21d48.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Combo Offers</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Link to="/ListRestaurants" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            </Tilt>
            </div>
            <div className="col">
            <Tilt options={defaultOptions} >
              <div className="card" style={{ width: "18rem" }}>
              <img src="https://i.pinimg.com/564x/94/67/d0/9467d07cd2ca271a0889d5348e1d6160.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Buy 1 Get Free</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Link to="/ListRestaurants" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            </Tilt>
            </div>
            <div className="col">
            <Tilt options={defaultOptions} >
              <div className="card" style={{ width: "18rem" }}>
              <img src="https://i.pinimg.com/564x/81/c2/a0/81c2a05e6229e7280f175b8533be1a4c.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Fast Delivery</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </p>
                <Link to="/ListRestaurants" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
            </Tilt>

            </div>
          </div>
        </div>
       

        <header style={{ backgroundImage: `url("https://i.pinimg.com/originals/40/b2/09/40b20983bbca1c91c48dfb6baed6ea7c.gif")` }}>
          <div className="container px-2 py-4 px-md-4 text-center text-lg-start">
            <div className="row lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

                <div className="card bg-glass">
                  
                    <img src='https://i.pinimg.com/564x/f8/a7/01/f8a70144eb881afe78df0164e657e966.jpg' className='d-block w-100' alt='...' />
                 
                </div>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-5 fw-bold ls-tight"
                  style={{ color: "hsl(225, 54.89%, 10.98%)" }}
                >
                  "The great times you can have with great food."

                </h1>
                <p
                  className="mb-4 opacity-100"
                  style={{ color: "hsl(215, 65.22%, 20.45%)" }}
                >
                  We've put a lot of thought into this new menu and we think you're going to love it, there are a lot of great new dishes on this menu, so be sure to come and check it out!
                </p>
                <div className="pt-1 mb-4">
                <Link to="/ListRestaurants" className="btn btn-primary">
                  Book Restaurant
                </Link>
                </div>
              </div>


            </div>
          </div>
        </header>
        {/* </section> */}

        <div className="container mb-2 text-center">
          <h4>Frequently asked questions</h4>
        </div>




        <div className="accordion accordion-flush" id="accordionFlushExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          data-mdb-collapse-init=""
          className="accordion-button collapsed"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#flush-collapseOne"
          aria-expanded="false"
          aria-controls="flush-collapseOne"
        >
          <i class="fa-solid fa-circle-dot"></i><pre>  </pre>What is your cancellation policy?
        </button>
      </h2>
      <div
        id="flush-collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-mdb-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
        We kindly request at least 24 hours' notice for cancellations to avoid a $25 per person fee.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo">
        <button
          data-mdb-collapse-init=""
          className="accordion-button collapsed"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
        >
         <i class="fa-solid fa-circle-dot"></i><pre>  </pre> Do you offer takeout or delivery?
        </button>
      </h2>
      <div
        id="flush-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-mdb-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
        Yes, we offer both takeout and delivery through our website or partner delivery services
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree">
        <button
          data-mdb-collapse-init=""
          className="accordion-button collapsed"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          <i class="fa-solid fa-circle-dot"></i><pre>  </pre>Do you cater to dietary restrictions and allergies?
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-mdb-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
        We understand that everyone has different dietary needs. Please inform us of any allergies or restrictions when making your reservation, and our friendly staff will be happy to assist you in finding suitable options.
        </div>
      </div>
    </div>
  </div>



        <Footer />
      </div>
    );
  }