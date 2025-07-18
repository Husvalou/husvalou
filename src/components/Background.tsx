import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      <div className="background-overlay" />
      <div className="animated-background">
        <div className="light" />
        <div className="light" />
        <div className="light" />
      </div>
    </>
  );
};

export default Background; 