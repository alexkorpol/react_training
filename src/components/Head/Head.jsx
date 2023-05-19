import React from 'react';
import PropTypes from 'prop-types';
export const Head = ({ clas, id, data, children }) => {
  console.log('children', children);
    
  return (
  <>
    {children}
    <p id={id} className={clas}> I am P </p>
  </>
  )
  
}
Head.propTypes = {
    id: PropTypes.string.isRequired,
    clas: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.array,
};
