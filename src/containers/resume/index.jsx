import React from 'react';
import { BsInfoCircleFill, BsDownload } from 'react-icons/bs';
import { FiFileText } from 'react-icons/fi';
import PageHeaderContent from "../../components/pageHeaderContent";
import './style.scss';

// ✅ Correct way to include PDF
import resumePdf from '../../assets/cv/Rushabh-Khadse-9049269552.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent 
        HeaderText="My Resume" 
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="resume__content">
        <div className="resume__card">
          <div className="resume__card-icon">
            <FiFileText size={60} />
          </div>
          <h3>Download My Resume</h3>
          <p>Get a complete overview of my skills, experience, and education in PDF format</p>
          
          <div className="resume__card-actions">
            <a 
              href={resumePdf} 
              download 
              className="resume__download-button"
            >
              <BsDownload /> Download PDF
            </a>
          </div>
          
          <div className="resume__card-footer">
            <span>File size: ~2MB</span>
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
