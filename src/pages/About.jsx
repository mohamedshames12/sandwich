import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
function About() {
  return (
    <>
      <section className="about">
        <h1>welcom to about us</h1>
        <div className="about-container">
          <div className="box-about">
            <h2>what we are?</h2>
            <p>
              Bursting onto the scene in 2011 with a clear objective: to provide
              both extremely high-quality food and excellent service, all while
              creating friendships, not customers. With an incredible lunch and
              catering menu that puts a savory spin on healthy eating, That's A
              Wrap Sandwich Company wants to serve YOU. Our commitment to using
              only wholesome nutritious ingredients of the highest quality has
              earned us recognition and a widespread following. Whether you are
              a lunchtime regular or an event planner looking for a premium
              caterer, Thats a Wrap Sandwich Co guarantees sensational,
              guilt-free alternatives to the norm. From any one of our beautiful
              locations, you can order such fan favorites as the Chicken Pesto,
              a hearty sandwich made to perfection on fresh ciabatta bread, the
              Brooklyn Special, a generously stuffed spinach wrap, or a
              custom-designed salad made with a bounty of crisp, mouthwatering
              veggies. All food, including our hormone-free chicken, turkey and
              roast beef which we roast daily, is expertly prepared and lovingly
              assembled before your very eyes all while exceeding our customers'
              expectations. Our ever-expanding gourmet menu is both bold and
              creative. We will go outside the box and create new and unexpected
              twists on the classics by fusing flavors, all within the realm of
              healthy eating.
            </p>
          </div>
          <div className="box-image">
            <img src="images/about.png" alt="" />
          </div>
        </div>
      </section>

      <section className="simple">
        <h1>3 simple steps</h1>
          <div className="container-simple">
          <div className="box-simple">
              <img src="icons/menu.png" alt="" />
              <h3>select food</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, odit!</p>
          </div>
          <div className="box-simple">
              <img src="icons/meal.png" alt="" />
              <h3>enjoy food</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, odit!</p>
          </div>
          <div className="box-simple">
              <img src="icons/fast-delivery.png" alt="" />
              <h3>30 minutes delivery</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, odit!</p>
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
  );
}

export default About;
