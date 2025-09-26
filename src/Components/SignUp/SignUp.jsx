import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";

function SignUp() {
    // State variables using useState hook
    const [role, setRole] = useState('');
    const [name, setName] = useState('demo_profile');
    const [email, setEmail] = useState('demo_profile@example.com');
    const [phone, setPhone] = useState('9198675309');
    const [password, setPassword] = useState('password123');
    const [showerr, setShowerr] = useState({}); // State to show error messages

    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault();
        setShowerr({});

        // Check if role is selected
        if (!role) {
            setShowerr((prevErrors) => ({
                ...prevErrors, role: "Please select a role"
            }));
            return;
        }

        // Check if the password is at least 8 characters long
        if (password.length < 8) {
            setShowerr((prevErrors) => ({
                ...prevErrors,
                password: "Password must be at least 8 characters long"
            }));
            return;
        }

        // Check if phone number is valid (exactly 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            setShowerr((prevErrors) => ({
                ...prevErrors,
                phone: "Phone number invalid"
            }));
            return;
        }

        // Simulate authentication for demo_profile purposes
        const demoEmail = "demo_profile@example.com";
        const demoPassword = "password123";

        if (email === demoEmail && password === demoPassword) {
            // Simulate successful registration
            sessionStorage.setItem("auth-token", "demo-auth-token");
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/frontend_developer_capstone_project");
            window.location.reload(); // Refresh the page
        } else {
            // Simulate error for invalid credentials
            setShowerr((prevErrors) => ({
                ...prevErrors,
                general: "Invalid email or password. Please use demo_profile@example.com and password123."
            }));
        }
    };

    const resetForm = () => {
        setRole("");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    };

    return (
        <div className="sign-up-container">
            <div>
                <div className="sign-up-signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="sign-up-signup-text1"> Already a member? <span><Link to="/frontend_developer_capstone_project/login" style={{ color: '#2190FF' }}> Login</Link></span></div>
                <div className="sign-up-signup-page">
                    <form method="POST" onSubmit={register}>

                        <div className='sign-up-form-group'>
                            <label htmlFor="role">Role</label>
                            <select
                                id="role"
                                className="sign-up-form-control"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required>
                                <option value="" disabled hidden>Select a Role</option>
                                <option value="patient">Patient</option>
                                <option value="doctor">Doctor</option>
                            </select>
                            {showerr.role && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.role}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)}
                                   type="text"
                                   name="name"
                                   id="name"
                                   className="sign-up-form-control"
                                   placeholder="Enter your name"
                                   aria-describedby="helpId"
                            />
                            {showerr.name && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.name}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)}
                                   type="tel"
                                   name="phone"
                                   id="phone"
                                   required className="sign-up-form-control"
                                   placeholder="Enter your phone number"
                                   aria-describedby="helpId"
                            />
                            {showerr.phone && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.phone}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                   type="email"
                                   name="email"
                                   id="email"
                                   className="sign-up-form-control"
                                   placeholder="Enter your email"
                                   aria-describedby="helpId"
                            />
                            {showerr.email && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.email}</div>}
                        </div>

                        <div className="sign-up-form-group">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                   name="password"
                                   id="password"
                                   required className="sign-up-form-control"
                                   placeholder="Enter your password"
                                   aria-describedby="helpId"
                            />
                            {showerr.password && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.password}</div>}
                        </div>

                        <div className="sign-up-btn-group">
                            <button type="submit" className="sign-up-btn sign-up-btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" onClick={resetForm} className="sign-up-btn sign-up-btn-danger mb-2 waves-effect waves-light">Reset</button>
                        </div>
                        {showerr.general && <div className="sign-up-err" style={{ color: 'red' }}>{showerr.general}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;