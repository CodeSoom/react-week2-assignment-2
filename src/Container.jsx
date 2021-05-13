import React, { Children, cloneElement, isValidElement } from 'react';

export default function Container({ children }) {
  (
    <div>
      {
        Children.map(children, (child) => {
          if (isValidElement(child)) return cloneElement(child);
          return child;
        })
      }
    </div>
  );
}
