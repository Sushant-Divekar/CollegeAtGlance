import React, { useState } from 'react'
import clgimg from '../Images/banner2.webp'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedbackType: 'General',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert('Name and Feedback is required');
      return;
    } else if (formData.message.length < 10) {
      alert('Feedback too short');
      return;
    }

    console.log('Form Submitter ', formData);

    const subject = encodeURIComponent(`Feedback: ${formData.feedbackType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`
    );

    const mailtoLink = `mailto:chaitya.dobariya@spit.ac.in?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      phone: '',
      feedbackType: '',
      message: ''
    });

    setSubmitted(true);
  }
  return (
    <>
      <img className='img_clg' src={clgimg} alt='collegeImg' />
      <div className='contact'>
        <div className='getInTouch'>
          <p className='getInTouchText'>Get In Touch..</p>
          <p className='contact_details'>
            Email to: <br />cagsupport2024@gmail.com
          </p>
        </div>


        {submitted ? (
          <div className='submitted_event'>
            <p>Thanks for your feedback!</p>
          </div>
        ) : (
          <div className='feedbackform'>
            <p className='feed_text'>Send us a message</p>
            <div className='feedback'>
              <form onSubmit={handleSubmit}>

                <div className='formDiv1'>
                  <div className='nameDiv1'>
                    <label htmlFor='name'>Name : </label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} />
                  </div>

                  <div className='nameDiv2'>
                    <label htmlFor="email">Email Address (Optional):</label>
                    <input type="email" id="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className='formDiv1'>
                  <div className='nameDiv3'>
                    <label htmlFor="phone">Phone (Optional):</label>
                    <input type="text" id="phone" name="phone" placeholder='Enter your phone no.' value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className='nameDiv4'>
                    <label htmlFor="feedbackType">Feedback Type:</label>
                    <select id="feedbackType" name="feedbackType" value={formData.feedbackType} onChange={handleChange}>
                      <option value="General">General Feedback</option>
                      <option value="Bug">Bug Report</option>
                      <option value="Feature">Feature Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>


                <div className='nameDiv5'>
                  <label htmlFor="message">Feedback:</label>
                  <textarea id="message" name="message" placeholder='Write anything you would like to share...' rows="4" cols="50" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className='nameDiv6'>
                  {/* <button type="submit">Submit Feedback</button> */}
                  <div className="buttons">
                    <button type="submit" className="blob-btn">
                      Submit
                      <span className="blob-btn__inner">
                        <span className="blob-btn__blobs">
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                          <span className="blob-btn__blob"></span>
                        </span>
                      </span>
                    </button>
                    <br />
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                            result="goo"
                          ></feColorMatrix>
                          <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>

    </>
  )
}

export default Contact
