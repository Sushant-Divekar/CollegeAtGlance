// import React from 'react'
// import './MtoP.scss'
// const MtoP = () => {
//   return (
//     <>
//       <div className='circle'></div> {/* Circle as fixed background */}
//       <div className='rectangle'></div>
//       <div className='MtoPdiv'>
//         <div className='MtoPTitle'>
//           <p className='MtoPtext'>Predict Your Percentile From Your Marks </p>
//         </div>
//         <input className='marksInput'
//            type='text'
//            placeholder='Enter Your Marks'
//         />
//         <div className='PercentileOp'>

//         </div>
//       </div>
//     </>
//   )
// }

// export default MtoP


// import React, { useState } from "react";
// import "./MtoP.scss";

// const MtoP = () => {
//   const [marks, setMarks] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setShowModal(false); // Hide modal before loading new data
//     const shifts = [1, 2, 3];
//     const newResults = [];

//     setTimeout(async () => {
//       for (const shift of shifts) {
//         try {
//           const body = {
//             Marks: parseInt(marks, 10),
//             Shift: shift,
//           };
//           const response = await fetch(
//             "http://127.0.0.1:5000/predictPercentile",
//             {
//               method: "POST",
//               headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//                 "Access-Control-Allow-Origin": "*",
//               },
//               body: JSON.stringify(body),
//             }
//           );

//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }

//           const data = await response.json();
//           newResults.push({ shift: shift, percentile: data.percentile });
//         } catch (err) {
//           console.error(err);
//           newResults.push({ shift: shift, error: true });
//         }
//       }
//       setResults(newResults);
//       setLoading(false);
//       setShowModal(true); // Show modal with results
//     }, 1000);
//   }

//   return (
//     <>
//       <div
//         className="circle"
//         style={{ visibility: loading ? "visible" : "hidden" }}
//       ></div>
//       <div className="rectangle"></div>
//       <div className="MtoPdiv">
//         <div className="MtoPTitle">
//           <p className="MtoPtext">Predict Your Percentile From Your Marks</p>
//         </div>
//         <input
//           className="marksInput"
//           type="text"
//           placeholder="Enter Your Marks"
//           value={marks}
//           onChange={(e) => setMarks(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//         {loading && <div>Loading...</div>}
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setShowModal(false)}>
//               &times;
//             </span>
//             {results.map((result, index) => (
//               <div key={index}>
//                 {result.error ? (
//                   <p>Error processing request for Shift {result.shift}</p>
//                 ) : (
//                   <p>
//                     Shift {result.shift}: {result.percentile}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MtoP;


import React, { useState } from "react";
import "./MtoP.scss";

const MtoP = () => {
  const [marks, setMarks] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  async function handleSubmit(e) {
    e.preventDefault();

    if (!marks) {
      alert("Please enter marks");
      return;
    } else if (marks < 0 || marks > 200) {
      alert("Marks should be between 0 and 200");
      return;
    } else if (isNaN(marks)) {
      alert("Marks should be a number");
      return;
    }

    setLoading(true);
    setShowModal(false); // Hide modal before loading new data
    const shifts = [1, 2, 3];
    const newResults = [];

    setTimeout(async () => {
      for (const shift of shifts) {
        try {
          const body = {
            Marks: parseInt(marks, 10),
            Shift: shift,
          };
          const response = await fetch(
            "http://127.0.0.1:5000/predictPercentile",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(body),
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          newResults.push({ shift: shift, percentile: data.percentile });
        } catch (err) {
          console.error(err);
          newResults.push({ shift: shift, error: true });
        }
      }
      setResults(newResults);
      setLoading(false);
      setShowModal(true); // Show modal with results
      setMarks("");
    }, 1000);
  }

  return (
    <>
      <div className="circle"></div>
      <div className="rectangle"></div>
      <div className="MtoPdiv">
        <div className="MtoPTitle">
          <p className="MtoPtext">Predict Your Percentile From Marks</p>
        </div>
        <input
          className="marksInput"
          type="text"
          placeholder="Enter Your Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button className = "MtoPSubmit" onClick={handleSubmit}>Submit</button>
        {loading && <div className="bubble-loader" style={{position:"fixed"}}>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        }
        <div className="disclaimer">Use for guidance; accuracy not assured</div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            {results.map((result, index) => (
              <div key={index}>
                {result.error ? (
                  <p>Error processing request for Shift {result.shift}</p>
                ) : (
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Shift {result.shift} ({result.shift === 1 ? 'easy' : result.shift === 2 ? 'medium' : 'hard'}) :</span> {result.percentile.toFixed(2)}%
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MtoP;
