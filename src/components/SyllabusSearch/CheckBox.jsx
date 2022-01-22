import React from 'react';

export const CheckBox = (props) => {
  const { name, tag, onChange, val } = props;


  return (
    <>
      <label>
        <input
          type="checkbox"
          value={tag}
          onChange={onChange}
          checked={val[{tag}]}
        />
      </label>
    </>
  );
};
