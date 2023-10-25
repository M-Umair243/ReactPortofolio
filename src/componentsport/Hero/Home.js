import React from 'react'
import '../Hero/home.css';
import { Typewriter } from 'react-simple-typewriter'
import hero from "../pics/hero.png";
import skill1 from "../pics/linkdin.png";
import skill2 from "../pics/github.png";
import skill3 from "../pics/figma.png";

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
      <div className="container f-flex top">
        <div className="left top">
          <h3>WELCOME TO MY WORLD</h3>
          <h1>Hi, I'm <span>UMAIR</span></h1>
          <h2>A <span>
            <Typewriter
              words={[' Profesional Coder.', ' Developer']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}

            />
          </span></h2>
          <p>A Front-end Developer is a tech industry professional who builds the front portion of websites that customers, guests, or clients use on a daily basis 1. </p>
          <div className="hero-btn d-flex">
            <div className="col-1">
              <h4>FIND WITH ME</h4>
              <div className="button">
                <button className="btn-shadow">
                  <i className='fab fa-facebook-f'></i>
                </button>
                <button className="btn-shadow">
                  <i className='fab fa-instagram'></i>
                </button>
                <button className="btn-shadow">
                  <i className='fa-brands fa-linkedin-in'></i>
                </button>
              </div>
            </div>
            <div className="col-1">
              <h4>BEST SKILLS ON</h4>
              <button className="btn-shadow">
                 <img src={skill1} alt="" />
                </button>
              <button className="btn-shadow">
                 <img src={skill2} alt="" />
                </button>
              <button className="btn-shadow">
                 <img src={skill3} alt="" />
                </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Home;