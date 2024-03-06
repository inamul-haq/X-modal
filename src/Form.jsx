import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email || !email.includes('@')) {
        errors.email = 'Invalid email. Please check your email address.';
        alert(errors.email)
    }
    else if (!phoneNumber || phoneNumber.length !== 10) {
        errors.phoneNumber = 'Invalid phone number. Please enter a 10-digit phone number.';
        alert( errors.phoneNumber);
    }
    else if (!dob || new Date(dob) > new Date()) {
        errors.dob = 'Invalid date of birth. Please enter a past date.';
        alert(errors.dob);
    }
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      setUsername('');
      setEmail('');
      setPhoneNumber('');
      setDob('');
    } else {
      setErrors(errors);
    }
  };

  const handleClickOutside = (e) => {
    const modalContent = document.querySelector(`.${'modalContent'}`);
    if (modalContent && !modalContent.contains(e.target)) {
      closeModal();
    }
  };
  

  return (
    <div className={isOpen ? 'modalOpen' : ''}>
      <div className='App'>
        <h1>User Details Modal</h1>
        <button className='openForm' onClick={openModal}>Open Form</button>
        {isOpen && (
          <div className='modal' onClick={handleClickOutside}>
            <div className='modal-content'>
              <h1>Fill Details</h1>
              <form onSubmit={handleSubmit}>
                <div className='inputContainer'>
                  <h4>Username:</h4>
                  <input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='inputField'
                    type="text"
                    required
                  />
                  <h4>Email Address:</h4>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='inputField'
                    type="email"
                   
                  />
                  <h4>Phone Number:</h4>
                  <input
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className='inputField'
                    type="text"
                  />
                  <h4>Date of Birth:</h4>
                  <input
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className='inputField'
                    type="date"
                  />
                  <button className='submit-button' type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
