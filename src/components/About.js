import React, { useState } from 'react';

function About() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowAbout(!showAbout)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        About
      </button>
      {showAbout && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>This is the about information.</p>
          {/* Add your about content here */}
        </div>
      )}
    </div>
  );
}

export default About;