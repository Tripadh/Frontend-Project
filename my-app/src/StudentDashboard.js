
import React from 'react';

function StudentDashboard() {
  // Sample data, replace with dynamic data as needed
  const studentName = 'John Doe';
  const coursesCompleted = 5;
  const hoursStudied = 120;
  const recentActivities = [
    'Completed "React Fundamentals" course',
    'Earned Certificate in JavaScript',
    'Set new study goal for September',
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Montserrat, sans-serif', maxWidth: '900px', margin: 'auto' }}>
      <h1>Welcome, {studentName}!</h1>

      <div style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
        {/* Summary Cards */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#fff',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(102,126,234,0.5)',
        }}>
          <h2>Courses Completed</h2>
          <p style={{ fontSize: '2rem', fontWeight: '700' }}>{coursesCompleted}</p>
        </div>

        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #f093fb 0%, #667eea 100%)',
          color: '#fff',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(240,147,251,0.5)',
        }}>
          <h2>Hours Studied</h2>
          <p style={{ fontSize: '2rem', fontWeight: '700' }}>{hoursStudied}</p>
        </div>
      </div>

      <div style={{ marginTop: '35px' }}>
        <h2>Recent Activities</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#333', fontSize: '1.1rem' }}>
          {recentActivities.map((activity, idx) => (
            <li key={idx} style={{ marginBottom: '8px' }}>
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentDashboard;
