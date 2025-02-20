import React from 'react';

export function ZaptBadge() {
  return (
    <div className="fixed bottom-2 left-2 z-50">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 underline cursor-pointer"
      >
        Made on ZAPT
      </a>
    </div>
  );
}