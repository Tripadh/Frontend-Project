import React, { useState } from 'react';
import StudentDashboard from './StudentDashboard'; // import the dashboard component
import './LoginSignup.css';

function LoginSignup() {
  const [isActive, setIsActive] = useState(false);
  const [role, setRole] = useState('student'); // for signup role
  const [loginRole, setLoginRole] = useState('student'); // for login role
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRoleChange = (e) => setRole(e.target.value);
  const handleLoginRoleChange = (e) => setLoginRole(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // add your signup processing here
    console.log('Sign Up Role:', role);
    // Assume signup success, maybe log in or show message
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    // add real authentication logic here
    console.log('Sign In Role:', loginRole);
    // On successful login:
    setLoggedIn(true);
  };

  if (loggedIn) {
    // Show dashboard once logged in
    return <StudentDashboard />;
  }

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSignupSubmit}>
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <label htmlFor="signup-role" style={{ marginTop: '10px', alignSelf: 'flex-start' }}>
            Select Role:
          </label>
          <select
            id="signup-role"
            value={role}
            onChange={handleRoleChange}
            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleSigninSubmit}>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <label htmlFor="login-role" style={{ marginTop: '10px', alignSelf: 'flex-start' }}>
            Select Role:
          </label>
          <select
            id="login-role"
            value={loginRole}
            onChange={handleLoginRoleChange}
            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '10px', width: '100%' }}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button type="button" className="forgot-password">
            Forgot Your Password?
          </button>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={() => setIsActive(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={() => setIsActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
