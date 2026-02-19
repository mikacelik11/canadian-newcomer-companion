import React from 'react';

function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="canada-flag-spinner">🍁</div>
        <h2 className="loading-text">Loading...</h2>
        <div className="loading-bar">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading; // finish