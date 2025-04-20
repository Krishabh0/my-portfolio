import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import { db } from '../../firebase'; // Firebase Firestore instance
import { collection, addDoc } from 'firebase/firestore';
import './style.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message submitted successfully!');
      setFormData({ name: '', email: '', description: '' });
    } catch (err) {
      console.error('Error submitting form: ', err);
      alert('Something went wrong. Please try again later.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id='contact' className='contact'>
      <PageHeaderContent 
        HeaderText="Contact Me" 
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className='contact__content'>
        <Animate 
          play 
          duration={1} 
          delay={0}
          start={{ transform: 'translateX(-200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>

        <Animate 
          play 
          duration={1} 
          delay={0}
          start={{ transform: 'translateX(200px)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <form className='contact__content__form' onSubmit={handleSubmit}>
            <div className='contact__content__form__controlswrapper'>
              <div>
                <input
                  required
                  name='name'
                  className='inputName'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor='name' className='nameLabel'>Name</label>
              </div>
              <div>
                <input
                  required
                  name='email'
                  className='inputEmail'
                  type='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor='email' className='emailLabel'>Email</label>
              </div>
              <div>
                <textarea
                  required
                  name='description'
                  className='inputDescription'
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor='description' className='descriptionLabel'>Description</label>
              </div>
            </div>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
