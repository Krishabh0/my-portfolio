import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'; 
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase, FaApple } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name",
    value: "Amol Maladhare"
  },
  {
    label: "Address",
    value: "Bhandra, Maharashtra, India"
  },
  {
    label: "Email",
    value: "maladhareamol@gmail.com"
  },
  {
    label: "Contact No",
    value: "+917558284812"
  },
];

const summery = `
Hello! I'm a passionate software engineer currently in my 4th year of engineering. 
I have a strong foundation in web development and problem-solving skills. 
I specialize in building web applications using technologies like HTML, CSS, JavaScript, 
and React. 

My journey into technology started when I first learned to code, and since then, 
I’ve been eager to learn and grow in this field. I enjoy tackling challenging problems and 
building solutions that make a difference.

Currently, I am actively looking for opportunities to work on real-world projects, 
collaborate with others, and further enhance my skills in software development and Full-stack Development.
`;

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        HeaderText="About Me" 
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate 
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3>Full-Stack Developer</h3>
            <p>{summery}</p>
          </Animate>

          <Animate 
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <h3 className='personalInformationHeaderText'>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span> {/* Corrected typo */}
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>

        <div className='about__content__servicesWrapper'>


        <Animate 
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(600px)' }}
            end={{ transform: 'translateX(0px)' }}
            >


          <div className='about__content__servicesWrapper__innerContent'>
            <div><FaDev size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><DiAndroid size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><FaDatabase size={60} color='var(--yellow-theme-main-color)' /></div>
            <div><FaApple size={60} color='var(--yellow-theme-main-color)' /></div>
          </div>
            </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
