import React from 'react'
import Protacts from '../data/Json'
import ProtactsHover from '../data/Json_hover';
import { MdStarRate ,MdStarHalf} from 'react-icons/md';
import {GrFormClose} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Home = () => {




  const handleDetails = event => {
    alert("we I'll show details soon!")
  }



  return (
    <>
    <div className='home'>
      <div className="dec">
          <h3>hamburger</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex accusantium dolorum ipsam commodi labore id, velit similique tempora eaque odit!</p>
          <button>see more</button>
        </div>
        <div className="image">
              <img src="images/image-home.png" alt="" />
              <div className="animation">
                <img src="Animation/burger.png" alt="" className='left' />
                <img src="Animation/fast-food.png" alt="" className='right'/>
              </div>
        </div>
      </div>
      <section className='under'>
        <h1>discount 50%</h1>
            <div className="container-under">
              <div className="box-under">
                <img src="images/salad.png" alt="" />
                <h4>salad</h4>
                <p>Dicta sequi harum animi. Rem, doloribus.</p>
                <h6>50%</h6>
              </div>
              <div className="box-under">
                <img src="images/bibimbap.png" alt="" />
                <h4>bibmbap</h4>
                <p>maxime suscipit reiciendis consequuntur!</p>
                <h6>50%</h6>
              </div>
              <div className="box-under">
                <img src="images/hamburger.png" alt="" />
                <h4>hamburger</h4>
                <p>accusamus! Eligendi ipsum neque eius.</p>
                <h6>50%</h6>
              </div>
            </div>
        </section>
        <section className='ourfood'>
          <h2>OUR FOOD</h2>
          <div className="container-our-food">
              {Protacts.map((protact, key) => 
                <div className="box-our" key={key}>
                  <img src={protact.image} alt="img" />
                  <h4>{protact.name}</h4>
                  <button onClick={handleDetails} data-protact={protact.dataProtact}>see details</button>
                </div>
              )}
          </div>
        </section>
                  <section className='ourfood_hover'>
                  <div className="container-our-food-hover">
                      {ProtactsHover.map((protactHover, key) => 
                   
                          <div className="box-our-hover" key={key} data-hover={protactHover.dataProtact}>
                          <GrFormClose className='close'/>
                          <div className="image-hover">
                            <img src={protactHover.image} alt="" />
                          </div>
                          <div className="stars">
                            <MdStarRate  className='star'/>
                            <MdStarRate  className='star'/>
                            <MdStarRate  className='star'/>
                            <MdStarRate  className='star'/>
                            <MdStarHalf  className='star'/>
                            <span>{protactHover.view}</span>
                          </div>
                            <div className="details-hover">
                              <h3>{protactHover.name}</h3>
                              <h5>{protactHover.descrpition}</h5>
                              <p>{protactHover.price}</p>
                            </div>
                            <div className="btns">
                              <button className='buy'>buy now</button>
                              <button className='cart'>add to cart</button>
                            </div>
                        </div>
                        )}
                    </div>
                  </section>
                  <section className='contact'>
                        <div className="container-contact">
                          <div className="box-contact">
                            <img src="icons/clock.png" alt="" />
                            <div className="contact-setails">
                              <h1>opening hours</h1>
                              <p>11.00am to 12.00pm</p>
                            </div>
                          </div>
                          <div className="box-contact">
                            <img src="icons/gmail.png" alt="" />
                            <div className="contact-setails">
                              <h1>our gmail</h1>
                              <p>mohamedhames900@gmail.com</p>
                            </div>
                          </div>
                          <div className="box-contact">
                            <img src="icons/placeholder.png" alt="" />
                            <div className="contact-setails">
                              <h1>our address</h1>
                              <p>nasr city - cairo</p>
                            </div>
                          </div>
                          <div className="box-contact">
                            <img src="icons/telephone.png" alt="" />
                            <div className="contact-setails">
                              <h1>our phone</h1>
                              <p>+201061242066</p>
                            </div>
                          </div>
                        </div>
                  </section>

                  <section className='email'>
                      <div className="container-email">
                        <div className="box-email">
                          <div className="send-email">
                            <h1>send your email with us</h1>
                          </div>
                          <input type="email" placeholder='enter email' />
                          <button>submit</button>
                        </div>
                        <div className="box-socail">
                          <div className="follow-us">
                            <h1>follow us</h1>
                          </div>
                          <Link to='https://www.facebook.com/'><img src="icons/facebook.png" alt="" /></Link>
                          <Link to="https://www.linkedin.com/in/mohamed-shams-a9a48b23b/"><img src="icons/linkedin.png" alt="" /></Link>
                          <Link to='#'><img src="icons/instagram.png" alt="" /></Link>
                          <Link to='https://web.whatsapp.com/'><img src="icons/whatsapp.png" alt="" /></Link>
                        </div>
                      </div>
                  </section>

                        <Footer />
            
    </>
  )
}

export default Home