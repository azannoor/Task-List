import React from 'react';
import PropTypes from 'prop-types';

function Analytics({ color }) {
  return (
    <>
      <svg
        className="mt-3 ml-3"
        width="201"
        height="20"
        viewBox="0 0 201 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="200" height="20" rx="4" fill="#DCDCDC" />
        <rect x="1" width='201' height="20" rx="4" fill={color} />
      </svg>
    </>
  );
}

Analytics.propTypes = {
  color: PropTypes.string.isRequired,
  
};

export default Analytics;
