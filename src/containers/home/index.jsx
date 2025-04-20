import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss';
import { Animate } from 'react-simple-animate';
import profileImg from "/src/containers/home/image/myImage.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id='home' className='home'>
      <div className='home__content'>
        <div className='home__text-wrapper'>
          <h1>
          Hello, I'm Krishabh

          <br/>
          <h1> &nbsp;  &nbsp; Khadse</h1>
          I'm a Web Developer
          </h1>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateY(550px)' }}
            end={{ transform: 'translateX(0px)' }}>
            <div className='home__contact_me'>
              <button onClick={handleNavigateToContactMePage}>Hire Me</button>
            </div>
          </Animate>
        </div>

        <div className='home__image-wrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'scale(0)' }}
            end={{ transform: 'scale(1)' }}>
            <img src={profileImg} alt="profile" className="home__profile-image" />
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Home;
