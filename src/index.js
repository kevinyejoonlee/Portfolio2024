import React from 'react';
import ReactDOM from 'react-dom/client';

const UnderConstruction = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>
        🚧 Under Construction 🚧
      </h1>
      <p style={{ color: '#666', fontSize: '18px' }}>
        This website is being built. Check back soon!
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UnderConstruction />
  </React.StrictMode>
);