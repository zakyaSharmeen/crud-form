import React, { useState } from "react";

export default function Form02() {
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
      newErrors.password = "password should be 6 characters";
    }

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setOutputMessage("form submitted");
      setSubmittedData({ ...formData });
      setFormData(initialFormData);
    } else {
      setErrors(newErrors);
      setOutputMessage(" OOPS fix the errors");
    }
  };
  return (
    <div>
      <h1>FORM VALIDATION</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="">GMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">submit</button>
      </form>

      {outputMessage && (
        <div className={submitted ? "success" : "error"}>{outputMessage}</div>
      )}
      {submittedData && (
        <div className="submitted-data">
          <h1>SUbmittedData</h1>
          <p>name: {submittedData.name}</p>
          <p>email: {submittedData.email}</p>
          <p>password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}
