import React, { useState } from "react";

const Volume = () => {
  const [volume, setVolume] = useState(50);


  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);

    // Adjust website volume using the Web Audio API
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const gainNode = audioContext.createGain();

    // Map the volume range from 0-100 to 0-1 for the Web Audio API
    const volumeValue = newVolume / 100;

    // Set the gain (volume) value of the gain node
    gainNode.gain.value = volumeValue;

    // Connect the gain node to the audio context destination (e.g., speakers)
    gainNode.connect(audioContext.destination);
  };
  return (
    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default Volume;
