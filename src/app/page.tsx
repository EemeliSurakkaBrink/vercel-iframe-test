"use client";

import { useState } from 'react';

// Renders the main page which includes a controllable iframe, positioned top-left.
// Controls for the iframe size are initially hidden and can be toggled.
export default function Home() {
  const [width, setWidth] = useState(375);
  const [height, setHeight] = useState(667);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="relative min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Toggle Button - Positioned top-right */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="absolute top-4 right-4 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {showControls ? 'Hide Controls' : 'Show Controls'}
      </button>

      {/* Controls Container - Conditionally rendered */}
      {showControls && (
        <div className="absolute top-16 right-4 z-10 bg-white p-4 rounded shadow-lg flex flex-col gap-4 items-start">
           <h2 className="text-lg font-semibold mb-2">Iframe Controls</h2>
           <div>
             <label htmlFor="widthInput" className="block text-sm font-medium text-gray-700">Width:</label>
             <div className="flex items-center">
               <input
                 id="widthInput"
                 type="number"
                 value={width}
                 onChange={(e) => setWidth(Number(e.target.value))}
                 className="border border-gray-300 rounded px-2 py-1 w-24"
               />
               <span className="ml-2">px</span>
              </div>
           </div>
           <div>
             <label htmlFor="heightInput" className="block text-sm font-medium text-gray-700">Height:</label>
             <div className="flex items-center">
              <input
                 id="heightInput"
                 type="number"
                 value={height}
                 onChange={(e) => setHeight(Number(e.target.value))}
                 className="border border-gray-300 rounded px-2 py-1 w-24"
               />
               <span className="ml-2">px</span>
              </div>
           </div>
        </div>
      )}

      {/* Iframe Container - Positioned top-left */}
      <div
        className="resize overflow-auto border border-gray-400 absolute top-0 left-0"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <iframe
           src="https://mooiwatbloemendoen-ai-tool.vercel.app/"
           className="w-full h-full border-0 block"
           title="Resizable Iframe Content"
         />
      </div>
    </div>
  );
}
