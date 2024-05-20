// // Diary.jsx

// import React, { useState } from "react";
// import "./Diary.scss"; // Import the SCSS file
// import collegeData from "./college.json";

// function Diary() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setSelectedCity("");
//     // setShowCityBox(true); // Show city box when search bar is clicked
//   };

//   // Extracting unique cities from the data
//   const uniqueCities = Array.from(new Set(collegeData.map((item) => item.city)));

//   function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   }

//   return (
//     <>
//       <div style={{ maxWidth: 600, margin: "0 auto" }}>
//         <div style={{ marginBottom: 10 }}>
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search by institute name..."
//             className="search-input" // Apply class for styling
//           />
//         </div>

//         <div style={{ marginBottom: 10 }}>
//           <select
//             value={selectedCity}
//             onChange={(e) => setSelectedCity(e.target.value)}
//             className="city-select" // Apply class for styling
//           >
//             <option value="">Select a city...</option>
//             {uniqueCities.map((city, index) => (
//               <option key={index} value={city}>{toTitleCase(city)}</option>
//             ))}
//           </select>
//         </div>

//         <div className="card-container">
//           {collegeData
//             .filter((item) => {
//               const matchesSearchTerm = item.college.toLowerCase().includes(searchTerm.toLowerCase());
//               const matchesSelectedCity = selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase();
//               return matchesSearchTerm && matchesSelectedCity;
//             })
//             .map((item, index) => (
//               <div className="card" key={index}>
//                 <div className="card-content">
//                   <div className="rank">{item.rank}</div>
//                   <div className="college-name">{item.college}</div>
//                 </div>
//                 <div className="city">{item.city}</div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Diary;


//-------------------------------------------------------------------

import React, { useState } from "react";
import "./Diary.scss";
import collegeData from "./college.json";

function Diary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedCity("");
  };

  const handleCollegeClick = (college) => {
    if (selectedColleges.length < 15) {
      if (!selectedColleges.includes(college)) {
        setSelectedColleges([...selectedColleges, college]);
      } else {
        setErrorMessage("You already selected this college.");
      }
    } else {
      setErrorMessage("You cannot select more than 15 colleges.");
    }
  };

  const removeSelectedCollege = (college) => {
    const updatedColleges = selectedColleges.filter((item) => item !== college);
    setSelectedColleges(updatedColleges);
  };

  const closeErrorMessage = () => {
    setErrorMessage("");
  };

  const isCollegeSelected = (college) => {
    return selectedColleges.includes(college);
  };

  const uniqueCities = Array.from(new Set(collegeData.map((item) => item.city)));

  function toTitleCase(str) {
    return str.toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }

  return (
    <>
      {/* <div className="diary_bg"></div> */}
      <div className='circle'></div> {/* Circle as fixed background */}
      <div className='rectangle'></div>
      <div className="diary_body">
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by institute name..."
            className="search-input"
          />
        </div>

        <div className="city-dropdown">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="city-select"
          >
            <option value="">Select a city...</option>
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>{toTitleCase(city)}</option>
            ))}
          </select>
        </div>

        <div className="diary_subtitle">
          <p style={{}}>Make List of Eligible Colleges</p>
        </div>

        <div className="diary-container" style={{ display: 'flex', overflow: "hidden" }}>
          <div className="left-panel-container" >
            <div className="left-panel">
              <div className="card-container">
                {collegeData
                  .filter((item) => {
                    const matchesSearchTerm = item.college.toLowerCase().includes(searchTerm.toLowerCase());
                    const matchesSelectedCity = selectedCity === "" || item.city.toLowerCase() === selectedCity.toLowerCase();
                    return matchesSearchTerm && matchesSelectedCity;
                  })
                  .map((item, index) => (
                    <div
                      key={index}
                      className={`card ${isCollegeSelected(item.college) ? 'selected' : ''}`}
                      onClick={() => handleCollegeClick(item.college)}
                    >
                      <div className="card-content">
                        <div className="rank">{item.rank}</div>
                        <div className="college-name">{item.college}</div>
                      </div>
                      <div className="city">{item.city}</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="right-panel-container">
            <div className="right-panel">
              {selectedColleges.length === 0 ? (
                <div>No college selected yet!!</div>
              ) : (
                selectedColleges.map((college, index) => (
                  <div key={index} className="selected-college" onClick={() => removeSelectedCollege(college)}>
                    {college}
                  </div>
                ))
              )}
              {errorMessage && (
                <div className="error-message">
                  <span>{errorMessage}</span>
                  <button className="close-btn" onClick={closeErrorMessage}>X</button>
                </div>
              )}
            </div>

            <div>⬇️ Download (Coming Soon)</div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Diary;
