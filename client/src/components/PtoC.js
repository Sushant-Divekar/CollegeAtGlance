


// import { useState } from "react";
// import styles from "./PtoC.module.scss";
// import collegeMapping from './collegeMapping.js';

// function PtoC() {
//   const [inputValue, setInputValue] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [checkedBranches, setCheckedBranches] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("Enter Your Category");
//   const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [collegeName, setCollegeName] = useState("");
//   const [collegeId, setCollegeId] = useState("");
//   const [collegesAbove, setCollegesAbove] = useState([]);
//   const [collegesBelow, setCollegesBelow] = useState([]);

//   function handleInputChange(e) {
//     setInputValue(e.target.value);
//   }

//   function toggleDiv() {
//     setIsOpen(!isOpen);
//   }

//   function handleCheckboxChange(e) {
//     const { name, checked } = e.target;
//     const branchIndex = parseInt(name, 10); // Convert branch name to index
//     if (checked) {
//       setCheckedBranches((prevCheckedItems) => [...prevCheckedItems, branchIndex]);
//     } else {
//       setCheckedBranches((prevCheckedItems) =>
//         prevCheckedItems.filter((item) => item !== branchIndex)
//       );
//     }
//   }

//   function toggleDropdown() {
//     setIsDropDownOpen(!IsDropDownOpen);
//   }

//   function handleOptionClick(option) {
//     setSelectedCategory(option);
//     setIsDropDownOpen(false);
//   }

//   function getCategoryIndex(category) {
//     const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
//     return categories.indexOf(category);
//   }

//   function handleClick() {
//     const categoryIndex = getCategoryIndex(selectedCategory);
//     const percentValue = parseFloat(inputValue); 
//     return fetch("http://127.0.0.1:5000/predict", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             Category: categoryIndex,
//             Branch: checkedBranches,
//             Percentile: percentValue,
//         }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//         return data.prediction;
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//         throw error;
//     });
// }

// function handleCollegeName() {
//   handleClick()
//   .then((collegeID) => {

//     if (collegeMapping.hasOwnProperty(collegeID)) {
//       const collegeName = collegeMapping[parseInt(collegeID)];
//       setCollegeId(collegeID);
//       setCollegeName(collegeName);

//       console.log("College ID:", collegeID, "College Name:", collegeName);

//       console.log("collegeID:" , collegeID);
//       console.log("collegeID type:", typeof collegeID);

//       const collegeKeys = Object.keys(collegeMapping);
//       const index = collegeKeys.indexOf(collegeID.toString());


//       const mappingLength = Object.keys(collegeMapping).length;
//       console.log("index : " , index);
//       console.log("mappingLength : " , mappingLength);


//       // Initialize arrays to store colleges above and below the predicted college
//       let collegesAbove = [];
//       let collegesBelow = [];

//       // Check if there are colleges present above the predicted college
//       if (index === 0) {
//         collegesBelow = collegeKeys.slice(1, 6); // Take 4 colleges below
//       } else if (index === 1) {
//         collegesAbove = collegeKeys.slice(0, 1); // Take 1 college above
//         collegesBelow = collegeKeys.slice(2, 5); // Take 3 colleges below
//       } else if (index === mappingLength - 1) {
//         collegesAbove = collegeKeys.slice(mappingLength - 5, mappingLength - 1); // Take 4 colleges above
//       } else if (index === mappingLength - 2) {
//         collegesBelow = collegeKeys.slice(mappingLength - 4, mappingLength - 1); // Take 3 colleges below
//         collegesAbove = collegeKeys.slice(mappingLength - 5, mappingLength - 2); // Take 1 college above
//       } else {
//         // Extract the colleges above and below the predicted college
//         collegesAbove = collegeKeys.slice(index - 1, index);
//         collegesBelow = collegeKeys.slice(index + 1, index + 4);
//       }

//       // Update state with the selected colleges
//       setCollegesAbove(collegesAbove);
//       setCollegesBelow(collegesBelow);

//       setShowPopup(true);
//     }
//     else {
//       console.log("College ID not found in mapping.");
//     }
//   })
//   .catch((error) => {
//       // Handle error if needed
//       console.error("Error:", error);
//   });
// }


//   function Popup({ collegeId , collegeName, collegesAbove, collegesBelow, onClose }) {
//     return (
//       <div className={styles.popupBackground} onClick={onClose}>
//         <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
//           <span className={styles.close} onClick={onClose}>&times;</span> {/* Close button */}
//           <div className={styles.popupContent}>
//             <h2>Predicted College</h2>
//             <p>{collegeId}<br/>{collegeName}</p>
//             <h2>Colleges Above</h2>
//             {collegesAbove.map(collegeID => <p key={collegeID}>{collegeID}: {collegeMapping[collegeID]}</p>)}
//             <h2>Colleges Below</h2>
//             {collegesBelow.map(collegeID => <p key={collegeID}>{collegeID}: {collegeMapping[collegeID]}</p>)}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className={styles.circle}></div>
//       <div className={styles.rectangle}></div>
//       <form onSubmit={e => e.preventDefault()} className={styles.forms}>
//         <div className={styles.container}>
//           <div className={styles.percentile_section}>
//             <div className={styles.percentile}>
//               Predict Your College From Your Percentile
//             </div>
//             <input
//               className={styles.get_percentile}
//               placeholder="Enter Your Percentile"
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className={styles.branch_section}>
//             <div className={styles.branch} onClick={toggleDiv}>
//               Enter your Branch
//             </div>
//             {isOpen && (
//               <div className={styles.branch_selection}>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="0"
//                     name="0"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="0">Computer</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="1"
//                     name="1"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="1">IT</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="2"
//                     name="2"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="2">Electrical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="3"
//                     name="3"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="3">Mechanical</label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="4"
//                     name="4"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="4">
//                     Electronics and Telecommunication
//                   </label>
//                 </li>
//                 <li>
//                   <input
//                     type="checkbox"
//                     id="5"
//                     name="5"
//                     onChange={handleCheckboxChange}
//                   />
//                   <label htmlFor="5">Civil</label>
//                 </li>
//               </div>
//             )}
//           </div>
//           <div className={styles.category_section}>
//             <div>
//               <button
//                 className={styles.category_select}
//                 onClick={toggleDropdown}
//               >
//                 {selectedCategory}
//               </button>
//               {IsDropDownOpen && (
//                 <div className={styles.category_dropdown}>
//                   <button
//                     onClick={() => handleOptionClick("open")}
//                     className={styles.dropdown_option}
//                   >
//                     OPEN
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("ews")}
//                     className={styles.dropdown_option}
//                   >
//                     EWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("tfws")}
//                     className={styles.dropdown_option}
//                   >
//                     TFWS
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("st")}
//                     className={styles.dropdown_option}
//                   >
//                     ST
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("sc")}
//                     className={styles.dropdown_option}
//                   >
//                     SC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("obc")}
//                     className={styles.dropdown_option}
//                   >
//                     OBC
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("vjnt")}
//                     className={styles.dropdown_option}
//                   >
//                     VJNT
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt1")}
//                     className={styles.dropdown_option}
//                   >
//                     NT1
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt2")}
//                     className={styles.dropdown_option}
//                   >
//                     NT2
//                   </button>
//                   <button
//                     onClick={() => handleOptionClick("nt3")}
//                     className={styles.dropdown_option}
//                   >
//                     NT3
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button
//               type="button"
//               className={styles.proceedButton}
//               onClick={handleCollegeName}
//             >
//               Proceed
//             </button>
//           </div>
//         </div>
//       </form>
//       {showPopup && (
//         <Popup collegeName={collegeName} collegeId = {collegeId} collegesAbove={collegesAbove} collegesBelow={collegesBelow} onClose={() => setShowPopup(false)} />
//       )}
//     </>
//   );
// }

// export default PtoC;




import { useState } from "react";
import styles from "./PtoC.module.scss";
import collegeMapping from './collegeMapping.js';

function PtoC() {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [checkedBranches, setCheckedBranches] = useState("");
  const [showBranch, setShowBranch] = useState("Enter Branch");
  const [selectedCategory, setSelectedCategory] = useState("Enter Category");
  const [IsDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [collegeName, setCollegeName] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [collegeCode, setCollegeCode] = useState(0);
  const [surColl, setSurColl] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function toggleDiv() {
    setIsOpen(!isOpen);
  }

  function handleCheckboxChange(e) {
    const { value } = e.target;
    const branchIndex = parseInt(value, 10); // Convert branch name to index
    if (value) {
      setCheckedBranches(branchIndex);
    }
    setShowBranch(branches[value]);
    setIsOpen(false);
    console.log(branchIndex);
    console.log(typeof branchIndex)
  }

  function toggleDropdown() {
    setIsDropDownOpen(!IsDropDownOpen);
  }

  function handleOptionClick(option) {
    setSelectedCategory(option.toUpperCase());
    setIsDropDownOpen(false);
  }

  function getCategoryIndex(category) {
    const categories = ["open", "ews", "tfws", "st", "sc", "obc", "vjnt", "nt1", "nt2", "nt3"];
    return categories.indexOf(category);
  }


  const branches = ["Computer", "IT", "Electrical", "Mechanical", "Electronics and Telecommunication", "Civil", "Computer Science"];


  function handleClick() {
    const categoryIndex = getCategoryIndex(selectedCategory);
    const percentValue = parseFloat(inputValue);

    return fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Category: categoryIndex,
        Branch: checkedBranches,
        Percentile: percentValue,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.prediction)
        setCollegeCode(parseInt(data.prediction))
        console.log("my college code : ", collegeCode)
        return collegeCode;
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      })
      .finally(() => setIsLoading(false));

  }

  // useEffect(() => {
  //   const categoryIndex = getCategoryIndex(selectedCategory);
  //   const percentValue = parseFloat(inputValue); 

  //   const fetchData = async () =>{
  //     const response = await fetch("http://127.0.0.1:5000/predict", {
  //       method: "POST",
  //       headers: {
  //           "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //           Category: categoryIndex,
  //           Branch: checkedBranches,
  //           Percentile: percentValue,
  //       }),
  //     });
  //     const data = await response.json();
  //     setCollegeCode(parseInt(data.prediction));
  //   };
  //   fetchData();
  // } , [])

  //-----------------------------------------------

  const numbers = [
    3012, 6006, 3215, 6271, 3199, 6007, 6273, 6175, 6276, 3182, 4115, 3185, 6289,
    2008, 6274, 3209, 1002, 3184, 3197, 6754, 3139, 6822, 2020, 6146, 6278, 3176,
    4025, 6272, 3135, 3204, 6004, 6141, 3214, 3211, 3208, 6282, 6139, 6156, 5121,
    6177, 3194, 5004, 4167, 3189, 3203, 6214, 3201, 3207, 3187, 3190, 6802, 6207,
    6267, 3033, 6265, 1101, 3148, 6281, 6796, 3423, 3183, 3475, 6285, 5108, 6222,
    3035, 4116, 5162, 3188, 3196, 6155, 3192, 6178, 6284, 6176, 6145, 6755, 3154,
    4174, 5160, 1012, 6160, 6182, 3210, 1105, 3175, 3146, 6122, 3471, 6283, 2114,
    4142, 6250, 6310, 6179, 6298, 6187, 5151, 4649, 5139, 5449, 3200, 4137, 3193,
    4004, 2113, 6269, 6223, 5181, 3223, 3439, 6732, 6649, 3221, 6203, 6772, 6220,
    1114, 2127, 3212, 2129, 6206, 6317, 3460, 6307, 6268, 4171, 3218, 6288, 3147,
    6786, 3198, 4136, 6270, 6277, 3467, 6311, 6769, 5172, 6275, 4138, 6028, 5104,
    6803, 6185, 4304, 3445, 3216, 3477, 6138, 6797, 4147, 1120, 4123, 5109, 4177,
    6184, 6839, 2126, 6419, 1107, 6640, 5125, 6780, 6834, 1128, 6794, 4179, 5382,
    6622, 1121, 5418, 6643, 6545, 3206, 5103, 5331, 6808, 6303, 5152, 5177, 3217,
    5330, 3202, 1265, 2533, 6144, 6625, 5173, 4104, 6815, 6762, 6634, 3465, 4144,
    6293, 4613, 6609, 1119, 5130, 5124, 4151, 4139, 6770, 5179, 2573, 5390, 6325,
    4163, 1116, 5106, 2250, 4172, 4145, 1123, 5107, 5182, 6759, 3220, 1127, 3222,
    6324, 6767, 2112, 5409, 6320, 5303, 6322, 4135, 6315, 5170, 6757, 4118, 4181,
    6313, 5408, 2254, 6308, 4134, 1276, 4133, 2138, 4190, 1117, 2134, 3351, 4196,
    5399, 4195, 5164, 2130, 2135, 5401, 6321, 6635, 1126, 6768, 5171, 5380, 6901,
    6305, 6938, 2133, 2136, 2116, 1182, 6644, 5184, 4193, 6466, 6756, 4302, 2131,
    6149, 3503, 6326, 5169, 6304, 2111, 6632, 3436, 6628, 3224, 6795, 6758, 6781,
    1180, 5396, 4188, 3219, 4197, 1125, 4192, 3440, 4143, 1130, 3447, 2252, 5411,
    2522, 6319, 5168, 2516, 6782, 3353, 6217, 6219, 6183, 5381, 4141, 5322, 4175,
    6766, 1268, 1005, 2021, 2137, 2141, 2146, 3014, 3036, 3286, 3462, 4005, 4285,
    4648, 5003, 5161, 6005, 6318, 6878,
  ];


  function getSurroundingCodes(numbers, code) {

    // Example usage
    console.log("data type of code :", typeof code);
    console.log("My code is ", code)
    const index = numbers.indexOf(code);
    if (index === -1) {
      return null; // Return null if the code doesn't exist in the array
    }

    const result = [];
    // Calculate starting and ending indices ensuring that the array always includes the target element
    let startIndex = Math.max(index - 2, 0);
    let endIndex = Math.min(index + 2, numbers.length - 1);

    // Extract the four surrounding elements including the target code
    for (let i = startIndex; i <= endIndex; i++) {

      if (numbers[i] !== collegeCode) {
        result.push(numbers[i]);
      }

    }

    // Adjust the window to ensure only four elements are included, focusing on balance around the target
    while (result.length > 4) {
      if (index - startIndex < endIndex - index) {
        result.pop(); // Remove from the end if more elements on the right
      } else {
        result.shift(); // Remove from the start if more elements on the left
      }
    }

    return result;
  }


  //------------------------------------------

  function handleCollegeName() {

    if (inputValue === "" || showBranch === "Enter Branch" || selectedCategory === "Enter Category") {
      alert("Please fill all the fields");
      return;
    } else if (isNaN(inputValue) || inputValue <= 0 || inputValue > 100) {
      alert("Please enter a valid percentile between 1 and 100");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      handleClick()
        .then((collegeID) => {

          if (collegeMapping.hasOwnProperty(collegeID)) {
            const collegeName = collegeMapping[parseInt(collegeID)];
            setCollegeId(collegeID);
            setCollegeName(collegeName);

            console.log("College ID:", collegeID, "College Name:", collegeName);

            console.log("collegeID:", collegeID);
            console.log("collegeID type:", typeof collegeID);

            // const collegeKeys = Object.keys(collegeMapping);
            // const index = collegeKeys.indexOf(collegeID.toString());


            // const mappingLength = Object.keys(collegeMapping).length;


            // Initialize arrays to store colleges above and below the predicted college
            const arr = getSurroundingCodes(numbers, collegeCode);

            for (let i = 0; i < 4; i++) {
              console.log("value ", arr[i])
            }
            const all = [];
            if (arr !== null) { // Check if arr is not null
              for (let i = 0; i < arr.length; i++) { // Use `let` instead of `int`, and adapt to arr's length
                let value = collegeMapping[arr[i]]; // Safely get value from the map
                if (value !== undefined && value !== collegeID) { // Optionally check if the value is defined
                  all.push(value);
                }
                console.log("am this that", value)
              }
            }

            setSurColl(all);

            setShowPopup(true);
          }
          else {
            console.log("College ID not found in mapping.");
          }

        })
        .catch((error) => {
          // Handle error if needed
          console.error("Error:", error);
          setIsLoading(false);
        })

      setInputValue("");
      setShowBranch("Enter Branch");
      setSelectedCategory("Enter Category");
    }, 2000);
  }


  function Popup({ collegeId, collegeName, all, onClose }) {
    return (
      <div className={styles.popupBackground} onClick={onClose}>
        <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
          <span className={styles.close} onClick={onClose}>&times;</span> {/* Close button */}
          <div className={styles.popupContent}>
            <h2>Predicted Colleges</h2>
            {/* <p>{collegeId}<br/>{collegeName}</p> */}
            <p style={{ "textAlign": "left", "textSize": "25px", "fontWeight": "bold" }}>1. {collegeName}</p>

            {all.map((value, index) => (
              <p style={{ "textAlign": "left", "textSize": "22px", "fontWeight": "bold" }} key={index}>{index + 2}. {value}</p>
            ))}

          </div>
        </div>
      </div>
    );
  }

  return (
    <>


      <div className={styles.circle}></div>
      <div className={styles.rectangle}></div>

      <form onSubmit={e => e.preventDefault()} className={styles.forms}>
        <div className={styles.container}>
          <div className={styles.percentile_section}>
            <div className={styles.percentile}>
              Predict Your College From Percentile
            </div>
            <input
              className={styles.get_percentile}
              placeholder="Enter Your Percentile"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.branch_section}>
            <div className={styles.branch} onClick={toggleDiv}>
              {showBranch}
            </div>
            {isOpen && (
              <div className={styles.branch_selection}>
                <li>
                  <input
                    type="radio"
                    id="0"
                    name="branch"
                    value="0"
                    // checked = {checkedBranches === "0"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="0">Computer</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="6"
                    name="branch"
                    value="6"
                    // checked = {checkedBranches === "5"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="6">Computer Science</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="1"
                    name="branch"
                    value="1"
                    // checked = {checkedBranches === "1"}
                    onChange={handleCheckboxChange}

                  />
                  <label htmlFor="1">IT</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="2"
                    name="branch"
                    value="2"
                    // checked = {checkedBranches === "2"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="2">Electrical</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="3"
                    name="branch"
                    value="3"
                    // checked = {checkedBranches === "3"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="3">Mechanical</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="4"
                    name="branch"
                    value="4"
                    // checked = {checkedBranches === "4"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="4">
                    Electronics and Telecommunication
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="5"
                    name="branch"
                    value="5"
                    // checked = {checkedBranches === "5"}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="5">Civil</label>
                </li>
              </div>
            )}
          </div>
          <div className={styles.category_section}>
            <div>
              <button
                className={styles.category_select}
                onClick={toggleDropdown}
              >
                {selectedCategory}
              </button>
              {IsDropDownOpen && (
                <div className={styles.category_dropdown}>
                  <button
                    onClick={() => handleOptionClick("open")}
                    className={styles.dropdown_option}
                  >
                    OPEN
                  </button>
                  <button
                    onClick={() => handleOptionClick("ews")}
                    className={styles.dropdown_option}
                  >
                    EWS
                  </button>
                  <button
                    onClick={() => handleOptionClick("tfws")}
                    className={styles.dropdown_option}
                  >
                    TFWS
                  </button>
                  <button
                    onClick={() => handleOptionClick("st")}
                    className={styles.dropdown_option}
                  >
                    ST
                  </button>
                  <button
                    onClick={() => handleOptionClick("sc")}
                    className={styles.dropdown_option}
                  >
                    SC
                  </button>
                  <button
                    onClick={() => handleOptionClick("obc")}
                    className={styles.dropdown_option}
                  >
                    OBC
                  </button>
                  <button
                    onClick={() => handleOptionClick("vjnt")}
                    className={styles.dropdown_option}
                  >
                    VJNT
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt1")}
                    className={styles.dropdown_option}
                  >
                    NT1
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt2")}
                    className={styles.dropdown_option}
                  >
                    NT2
                  </button>
                  <button
                    onClick={() => handleOptionClick("nt3")}
                    className={styles.dropdown_option}
                  >
                    NT3
                  </button>
                </div>
              )}
            </div>

          </div>
          <button
            type="button"
            className={styles.proceedButton}
            onClick={handleCollegeName}
          >
            {isLoading ? (
              <div className="loader-container">
                <div className="bubble-loader">
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                </div>
              </div> // Show loader if loading
            ) : (
              "Proceed"
            )}

          </button>
          <div className="disclaimer">Use for guidance; accuracy not assured</div>

        </div>
      </form>
      {/*isLoading && <div className={styles.loader}></div>*/}

      {showPopup && (
        <Popup collegeName={collegeName} collegeId={collegeId} all={surColl} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

export default PtoC;
