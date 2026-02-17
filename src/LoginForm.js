import React, { useState } from "react";

function LoginForm() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Login Successful!");
      setFormData({
        username: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Username:</label><br/>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <p style={{color:"red"}}>{errors.username}</p>
        </div>

        <div>
          <label>Email:</label><br/>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p style={{color:"red"}}>{errors.email}</p>
        </div>

        <div>
          <label>Password:</label><br/>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p style={{color:"red"}}>{errors.password}</p>
        </div>

        <button type="submit">Submit</button>
      </form>

      <p style={{color:"green"}}>{success}</p>

      <hr/>

      <h3>Dynamic Display</h3>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>

    </div>
  );
}

export default LoginForm;
