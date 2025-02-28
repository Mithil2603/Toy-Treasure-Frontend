import React from 'react';

const AlertDescription = ({ children, className }) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default AlertDescription;
