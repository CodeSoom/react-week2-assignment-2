import React, { Children, isValidElement, cloneElement } from 'react';

export default function List({ tagName, children }) {
  const CustomTag = tagName;

  return (
    <CustomTag>
      {
        Children.map(children, (child) => {
          if (isValidElement(child)) return cloneElement(child);
          return child;
        })
      }
    </CustomTag>
  );
}
