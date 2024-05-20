// import React, { useEffect, useState } from "react";
// import styles from "./ResultPage.module.scss";


// function ResultPage() {

//   const [predictedCollege, setPredictedCollege] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     console.log("Before fetch request");
//     fetch("http://127.0.0.1:5000/predict", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.prediction) {
//           console.log("prediction")
//           console.log("Prediction:", data.prediction); 
//           setPredictedCollege(data.prediction);
//         } else if (data.error) {
//           console.error(data.error);
//         }
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setIsLoading(false);
//       });

//       console.log("After fetch request");
//   } , []);

//   return (
//     <>
//       <div className={styles.circle}></div>
//       <div className={styles.rectangle}></div>
//       <div className={styles.container}>
//         <div className={styles.top_Heading}>
//           <div className={styles.collegePrompt}>
//             <div>Your Colleges Will be.......</div>
//             <br/>
//           </div>

//           {isLoading ? (
//               <p>Loading...</p>
//             ) : (
//               <h1 className={styles.pred}>{predictedCollege}</h1>
//             )}
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default ResultPage;


import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const location = useLocation();
  const prediction = location.state && location.state.prediction;

  return (
    <div>
      <h1>Result Page</h1>
      {prediction ? (
        <p>Predicted College: {prediction}</p>
      ) : (
        <p>No prediction available</p>
      )}
    </div>
  );
}

export default ResultPage;
