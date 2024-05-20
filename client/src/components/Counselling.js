import React, { useState } from 'react';
import './Counselling.scss';

const Counselling = () => {
  const [formData, setFormData] = useState({
    name: '',
    percentile: '',
    branch: [],
    location: '',
    tfws: false,
  });

  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      branch: checked ? [...formData.branch, name] : formData.branch.filter(item => item !== name),
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can do something with the form data here, like sending it to a server

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false); // Close pop-up on "OK" button click

    setFormData({
        name: '',
        percentile: '',
        branch: [],
        location: '',
        tfws: false,
      });
  };


  return (
    <>
        <div className='circle'></div> {/* Circle as fixed background */}
        <div className='rectangle'></div>

        <div className='coun-form'>
            <div className='coun-text-div'>
                <p className='coun-text'>Counselling Form </p>
            </div>
        
            <form className="form" onSubmit={handleSubmit}>
            <div className='name_perc'>
                <div className="form-group" >
                    <label className="form-label">
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                    Percentile:
                    <input
                        type="text"
                        name="percentile"
                        value={formData.percentile}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    </label>
                </div>
            </div>
            <div className="form-group">
                    <label className="form-label">Branch:</label>
                    <div className="checkbox-group">
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="Computer Science"
                        checked={formData.branch.includes("Computer Science")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    Computer Science
                    </label>
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="IT"
                        checked={formData.branch.includes("IT")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    IT
                    </label>
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="Electrical"
                        checked={formData.branch.includes("Electrical")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    Electrical
                    </label>
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="Mechanical"
                        checked={formData.branch.includes("Mechanical")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    Mechanical
                    </label>
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="Electronic and telecommunication"
                        checked={formData.branch.includes("Electronic and telecommunication")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    Electronic and telecommunication
                    </label>
                    <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="Civil"
                        checked={formData.branch.includes("Civil")}
                        onChange={handleCheckboxChange}
                        className="form-checkbox"
                    />
                    Civil
                    </label>
            </div>
            </div>

            <div className="form-group">
                <label className="form-label">
                Location:
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                </label>
            </div>
            <div className="form-group">
                <label className="form-label">
                Do you want TFWS?
                <input
                    type="checkbox"
                    name="tfws"
                    checked={formData.tfws}
                    onChange={handleChange}
                    className="form-checkbox"
                />
                </label>
            </div>
            <button type="submit" className="form-button">Submit</button>
            </form>
        </div>

        {/* Pop-up box */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Thanks for filling the counselling form</p>
            <button onClick={handlePopupClose} className="popup-button">OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Counselling;
