import React, { useState } from "react";

function Form() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [outputMessage, setOutputMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "password shouold be 6 character";
    }

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setOutputMessage("form submitted");
      setSubmittedData({ ...formData });
      setFormData(initialFormData);
    } else {
      setErrors(newErrors);
      setOutputMessage("fix the eerrrors");
    }
  };

  return (
    <>
      <h1>FORM VALDATION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your name"
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="">EMAIL</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="">PASSWORD</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="submit">
          SUBMIT
        </button>
      </form>
      {outputMessage && (
        <div className={submitted ? "success" : "error"}>{outputMessage}</div>
      )}
      {submittedData && (
        <div className="submitted-data">
          <h1>Submitted Data</h1>
          <p>name: {submittedData.name}</p>
          <p>email: {submittedData.email}</p>
          <p>password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
}

export default Form;
