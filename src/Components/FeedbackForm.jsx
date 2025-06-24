import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    feedback: "",
    rating: "",
  });
  
  const handlerChange = (e) => {
    const {name, value} = e.target 
    setFormData({
      ...formData, [name]: value
    })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const confirmationMessage = `
    Name: ${formData.userName}
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}`

    const isConfirmed = window.confirm(`Please confirm your details: \n\n ${confirmationMessage}`)

    if (isConfirmed) {
      console.log("Submitting information: ", formData)
      setFormData({userName: "", email: "", feedback: "", rating: ""})
      alert("Thank you for your valuebale feedback!")
      console.log(formData)
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit= {handleSubmit}>

        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        <input
          type= "text"
          name= "userName"
          placeholder= "Your Name"
          value= {formData.userName}
          onChange= {handlerChange}
        />

        <input
          type= "email"
          name= "email"
          placeholder= "Your Email"
          value= {formData.email}
          onChange= {handlerChange}
        />

        <textarea
          type= "feedback"
          name= "feedback"
          placeholder= "Your Feedback"
          value= {formData.feedback}
          onChange= {handlerChange}
        ></textarea>

        <div className="rating-container" onChange={handlerChange}>
          <p>How would you rate your experience?</p>
          <label className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value="1 star" />
            <span>⭐</span>
          </label>
          <label className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value="2 stars" />
            <span>⭐⭐</span>
          </label>
          <label className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value="3 stars" />
            <span>⭐⭐⭐</span>
          </label>
          <label className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value="4 stars" />
            <span>⭐⭐⭐⭐</span>
          </label>
          <label className="rating-option">
            <input 
              type="radio" 
              name="rating" 
              value="5 stars" />
            <span>⭐⭐⭐⭐⭐</span>
          </label>
        </div>
        <button type="submit">Submit Feedback</button>

      </form>
    </>
  );
};

export default FeedbackForm;
