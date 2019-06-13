import React from 'react';
export default ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="64" />
    <circle cx="256" cy="448" r="64" />
    <circle cx="256" cy="64" r="64" />
  </svg>
);
