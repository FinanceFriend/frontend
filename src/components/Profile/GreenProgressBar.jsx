import React, { useState, useEffect } from 'react';
import SemicircleProgressBar from 'react-progressbar-semicircle';

const GreenSemiCircleProgressBar = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percent);
  }, [percent]);

  const options = {
    size: 100,            // Adjust the size of the progress bar
    strokeWidth: 8,
           // Adjust the stroke width   // Set the track color // Set the initial percentage
  };

  return (
    <SemicircleProgressBar
      options={options}
    />
  );
};

export default GreenSemiCircleProgressBar;
