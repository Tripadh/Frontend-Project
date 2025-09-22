import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import LoginSignup from './LoginSignup';
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';


function App() {
  const [userRole, setUserRole] = useState(null); // null means not logged in

  // Handle login and set user role (admin or student)
  const handleLogin = (role) => {
    setUserRole(role);
  };

  // Handle logout and reset state
  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <>
      {/* Logo at the top */}
      <div className="brand-logo">
        <div className="brand-icon">
          <FaHeart />
        </div>
        <span className="brand-title">WellnessHub</span>
      </div>

      {/* Conditionally render login/signup or dashboards based on role */}
      {!userRole && <LoginSignup onLogin={handleLogin} />}
      {userRole === 'admin' && <AdminDashboard onLogout={handleLogout} />}
      {userRole === 'student' && <StudentDashboard onLogout={handleLogout} />}
      {userRole && userRole !== 'admin' && userRole !== 'student' && (
        <div>Unknown role, please contact support.</div>
      )}
    </>
  );
}

export default App;
