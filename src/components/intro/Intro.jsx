import React from 'react';
import ME from '../../assets/logo.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div> */}
          <p>100 Feet Studio is one of the best and well-known studio in Hyderabad for its services. 
            We committed ourselves to provide quality training for our fitness and dance enthusiasts in a fun, 
            upbeat, welcoming environment which is encouraging for all.We aim to encourage our clients, students to reach their full potential in every aspect.  We welcome all and have classes available for ages 3 to 65! To ensure classes are suitable for those who attend, we offer a range of options across styles, age groups and abilities. Whether you are aiming to stay fit, or become a dance champion etc.
Our services consist of Zumba , Dance Fitness, Bollywood, HipHop, Afrobeat, Kizomba, Bellydance etc. We are grateful to have some amazing collaboration with corporations like Microsoft, Deloitte, Infosys and many more. We are proud to give so many smiles and happy moments to our clients and we will continue to serve everyone with a degree of excellence.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro