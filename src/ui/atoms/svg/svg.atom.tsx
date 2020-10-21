import React from 'react';


export const Svg = (props: any) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg">
      {props.children}
    </svg>
  );
};