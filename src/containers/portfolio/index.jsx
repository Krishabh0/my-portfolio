import React from 'react';
import { BsInfoCircleFill, BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss';

// ✅ Import all your images here (correct paths relative to this file)
import sortvis from '../../assets/images/sortvis.png';
import snake from '../../assets/images/snake.jpg';
import music from '../../assets/images/Music.jpg';
import stonepaper from '../../assets/images/stonepaperScissor.jpg';

const projects = [
  {
    id: 1,
    title: "Sorting Visualizer",
    description:
      "The Sorting Visualizer is an interactive web-based tool built using HTML, CSS, and JavaScript, designed to visually demonstrate the working of a bubble sort algorithm. This project allows users to visualize how the sorting algorithm sorts step by step. Each step is shown in real-time, where the bars representing numbers move to indicate the sorting process.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    image: sortvis,
    githubLink: "https://github.com/Krishabh0/Sorting-Visualizer",
  },
  {
    id: 2,
    title: "Snake Game",
    description:
      "The Snake Game is a classic arcade game where the player controls a growing snake that moves in a grid, eating food while avoiding collisions with the walls or itself. This Java implementation of the game utilizes Swing for GUI and a LinkedList to manage the snake’s body.",
    technologies: ["Java"],
    image: snake,
    githubLink: "https://github.com/Krishabh0/snake-game",
  },
  {
    id: 3,
    title: "My Music",
    description:
      "I built a responsive and interactive Music Playlist Website that allows users to explore, play, and manage their favorite songs in a clean and modern interface. This project showcases my front-end development skills, focusing on UI design, responsive layouts, and dynamic functionality using JavaScript.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    image: music,
    githubLink: "https://github.com/Krishabh0/My_Music",
  },
  {
    id: 4,
    title: "Stone Paper Scissor Game",
    description:
      "I developed an interactive Stone Paper Scissors Game where users can play against the computer in a fun and responsive interface. The game is built using core web technologies, focusing on logic implementation, responsive UI, and user interaction.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    image: stonepaper,
    githubLink: "https://github.com/Krishabh0/Stone-Paper-Scissor",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent 
        HeaderText="My Projects" 
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="portfolio-content">
        <div className="portfolio-cards">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="card-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>Project Image</span>
                  </div>
                )}
              </div>
              
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="card-actions">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <BsGithub /> Code
                    </a>
                  )}
                  
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="demo-link"
                    >
                      <BsBoxArrowUpRight /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
