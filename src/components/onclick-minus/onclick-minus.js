import React from 'react';


export const onClickMin = (count, setCount) => {
  if (count > 0) {
    setCount(count - 1);
  }
};