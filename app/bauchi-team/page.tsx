'use client';

import { useEffect } from 'react';

export default function BauchiTeam() {
  useEffect(() => {
    window.location.href = 'https://aanda-computers-bauchi.onrender.com/login';
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0fdfa'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Redirecting to Bauchi Team Portal...
        </h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          If you are not redirected automatically,
        </p>
        <a 
          href="https://aanda-computers-bauchi.onrender.com/login"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0d9488',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Click Here
        </a>
      </div>
    </div>
  );
}
