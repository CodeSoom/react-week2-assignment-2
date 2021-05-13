import React, { Children, cloneElement, isValidElement } from 'react';

const Container = ({ children }) => (
  <div>
    {
      Children.map(children, (child) => {
        if (isValidElement(child)) return cloneElement(child);
        return child;
      })
    }
  </div>
);

export default Container;
