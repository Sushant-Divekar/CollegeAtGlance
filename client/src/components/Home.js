// import React, { useEffect, useRef, useState } from 'react';
// import Picture from './Picture.png';
// import './Home.scss';

// const Home = () => {
//   const [animateVisionBox, setAnimateVisionBox] = useState(false);
//   const [animateFeatureTag, setAnimateFeatureTag] = useState(false);
//   const [animateFeaturePoints, setAnimateFeaturePoints] = useState(false);

//   const visionBoxRef = useRef(null);
//   const featureRef = useRef(null);

//   const handleVisionBoxMouseEnter = () => {
//     setAnimateVisionBox(true);
//   };

//   const handleFeatureMouseEnter = () => {
//     setAnimateFeatureTag(true);
//     setAnimateFeaturePoints(true);
//   };

//   return (
//     <>
//       <div className={`nameNimg `}>
//         <div className='circle'></div> {/* Circle as fixed background */}
//         <div className='rectangle'></div>
//         <div className='projectName'>
//           <p className='pname' >College</p>
//           <p className='pname' style={{ marginTop: '-12%' } }>At</p>
//           <p className='pname' style={{ marginTop: '-12%' } }>Glance</p>
//           <p className='ptag' style={{ marginTop: '-3%' } }>Empowering Futures:</p>
//           <p className='ptag' style={{ marginTop: '-2%' } }>Your Score-Based College Predictions</p>
//         </div>
//         <div className='projectImage'>
//           <img className = 'clgsearch' src={Picture} alt="clgsearch"/>
//         </div>
//       </div>
//       <div className='loginNsignup'>
//         <button className='L-button'>Login</button>
//         <button className='S-button'>SignUp</button>
//       </div>

//       {/*Our Mission Box */}
//       <div className='Vision_div' ref={visionBoxRef} onMouseEnter={handleVisionBoxMouseEnter}>
//         <div className={`Vision_box ${animateVisionBox ? 'animate' : ''}`} >
//           <p className='title'  style={{ marginBottom: '-1%' } }>Our Vision</p>
//           <p className = 'vision_text'>At College at Glance, we envision a future where every student makes <br/>
//           informed and confident choices about their higher education journey. Our <br/>
//           vision is to revolutionize college selection by leveraging the power of <br/>
//           machine learning to provide accurate and personalized predictions based <br/>
//           on your MH-CET percentile. We believe in simplifying the complex decision-<br/>
//           making process, ensuring that each student finds the perfect match for their<br/>
//            academic aspirations.</p>
//         </div>
//       </div>

//       <div className='features' ref={featureRef} onMouseEnter={handleFeatureMouseEnter}>
//           <div className={`featureTag ${animateFeatureTag ? 'animate1' : ''}`}  >
//             <p className='fname' >Our</p>
//             <p className='fname' style={{ marginTop: '-12%' } }>Features</p>
//           </div>
//           <div className={`featuresPoints ${animateFeaturePoints ? 'animate2' : ''}`} >
//             <div className='feature 1'><p className='featurep'>College Predictive Analysis</p></div>
//             <div className='feature 2'><p className='featurep'>Detail College Information</p></div>
//             <div className='feature 3'><p className='featurep'>Data Security and Privacy</p></div>
//             <div className='feature 4'><p className='featurep'>Avoid Common Pitfalls By <br/>Choosing Wrong College</p></div>
//           </div>

//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from 'react';
import Picture from '../Images/Picture.png';
import Vision from '../Images/goal.png';
import './Home.scss';
import Footer from './Footer';

const Home = () => {
  const [animateVisionBox, setAnimateVisionBox] = useState(false);
  const [animateFeatureTag, setAnimateFeatureTag] = useState(false);
  const [animateFeaturePoints, setAnimateFeaturePoints] = useState(false);

  const visionBoxRef = useRef(null);
  const featureRef = useRef(null);
  const featurePointsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref, setAnimate) => {
        const element = ref.current;
        if (element) {
          const boundingClientRect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.8; // 80% of the viewport height
          const isScrolledIntoView = boundingClientRect.top <= threshold;
          if (isScrolledIntoView) {
            setAnimate(true);
          }
        }
      };

      checkVisibility(visionBoxRef, setAnimateVisionBox);
      checkVisibility(featureRef, setAnimateFeatureTag);
      checkVisibility(featurePointsRef, setAnimateFeaturePoints);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: '100vh' }}>
        <div className={`nameNimg `}>
          <div className='circle'></div> {/* Circle as fixed background */}
          <div className='rectangle'></div>
          <div className='projectName'>
            <p className='pname' >College</p>
            <p className='pname' style={{ marginTop: '-12%' }}>At</p>
            <p className='pname' style={{ marginTop: '-12%' }}>Glance</p>
            <p className='ptag' style={{ marginTop: '-3%' }}>Empowering Futures:</p>
            <p className='ptag' style={{ marginTop: '-2%' }}>Your Score-Based College Predictor</p>
          </div>
          <div className='projectImage'>
            <img className='clgsearch' src={Picture} alt="clgsearch" />
          </div>
        </div>
        {/*<div className='loginNsignup'>
          <button className='L-button'>Login</button>
          <button className='S-button'>SignUp</button>
        </div>*/}
      </div>

      {/* Our Vision Box */}
      <div className='Vision_div' ref={visionBoxRef}>
        <img className='clgsearch' src={Vision} alt="Our Vision" />
        <div className={`Vision_box ${animateVisionBox ? 'animate' : ''}`} >
          <p className='title' style={{ marginBottom: '-1%' }}>Our Vision</p>
          <p className='vision_text'><span style={{"fontSize": "36px", "lineHeight": "1"}}>A</span>t College At Glance, we envision a future where every student makes
            informed and confident choices about their higher education journey. Our 
            vision is to revolutionize college selection by leveraging the power of 
            machine learning to provide accurate and personalized predictions based 
            on your MH-CET percentile. We believe in simplifying the complex decision -
            making process, ensuring that each student finds the perfect match for their
            academic aspirations.</p>
        </div>
      </div>

      {/* Features */}
      <div className='features' >
        <div className={`featureTag ${animateFeatureTag ? 'animate1' : ''}`} ref={featureRef}>
          <p className='fname' >Our</p>
          <p className='fname' style={{ marginTop: '-12%' }}>Features</p>
        </div>
        <div className={`featuresPoints ${animateFeaturePoints ? 'animate2' : ''}`} ref={featurePointsRef} >
          <div className='feature 1'><p className='featurep'>College Predictive Analysis</p></div>
          <div className='feature 2'><p className='featurep'>Detailed College Information</p></div>
          <div className='feature 3'><p className='featurep'>Avoiding Common Pitfalls</p></div>
          <div className='feature 4'><p className='featurep'>Create Your Own College List ...</p></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;

