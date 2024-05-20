import React from 'react'
import './About.scss';
const About = () => {
  return (
    <>
      {/* <div className='circle'></div>
      <div className='rectangle'></div> */}
      {/* <img className='img_clg' src = {clgimg} alt='collegeImg'/> */}
      <div className='circle'></div> {/* Circle as fixed background */}
      <div className='rectangle'></div>
      <div className='Project_Description'>
        <p className='AboutUs_text'>About Us</p>
        <p className='AboutUs_para'>
          Our project utilizes machine learning algorithms to predict
          engineering college allocations based on the
          <a href='https://fe2023.mahacet.org/StaticPages/HomePage'> Maharashtra Common Entrance Test (Mht-CET)</a> percentile obtained
          by students. We aim to assist students in making
          informed decisions about their college choices by providing
          accurate predictions based on historical data.</p>
      </div>
      <div className='Methodology'>
        <p className='AboutUs_text2'>What We Did?</p>
        <p className='AboutUs_para2'>
          We have developed a predictive model that analyzes past
          years' engineering college allocation data from the official
          Mht-CET website. Using machine learning techniques, we correlate
          Mht-CET  percentiles with colleges to predict the most likely college
          allocations for students based on their percentiles.Our project
          relies on data obtained from the official Mht-CET site, which
          includes historical percentile and college allocation information.
          We ensure the accuracy and reliability of our predictions by using
          authenticated data from trusted sources.
        </p>
      </div>
      <div className='Future_Plans'>
        <p className='AboutUs_text3'>Future Plans</p>
        <p className='AboutUs_para3'>
          We are committed to continuously improving our predictive model by
          incorporating feedback and updating it with the latest data. In the
          future, we plan to expand our project to include additional features
          such as personalized recommendations and college comparison tools.
        </p>

      </div>

      <div className='Acknowledgments'>
        <p className='AboutUs_text4'>Acknowledgments</p>
        <p className='AboutUs_para4'>
          We would like to express our gratitude to the Mht-CET authorities
          for providing access to the necessary data for our project.
          Additionally, we appreciate the support and collaboration of our
          team members in bringing this project to fruition.
        </p>

      </div>
      <div className='Team_Members'>
        <p className='AboutUs_text5'>Team Members</p>
        <p className='AboutUs_para5'>
          <p>Sushant Divekar : sushant.divekar@spit.ac.in</p>
          <p>Tejas Dhurgude : tejas.dhurgude@spit.ac.in</p>
          <p>Chaitya Dobariya : chaitya.dobariya@spit.ac.in</p>
          <p>Prashil Kadam : prashil.kadam@spit.ac.in</p>
        </p>
      </div>

      <div>

      </div>

    </>
  )
}

export default About
