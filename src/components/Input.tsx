import React, { ComponentPropsWithoutRef } from 'react';

type InputPropTypes = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>; // Corrected 'inuput' to 'input'

const Input = ({ label, id, ...rest }: InputPropTypes) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...rest} /> {/* Spread rest props here */}
    </p>
  );
};

export default Input;
