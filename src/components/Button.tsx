import React, { ComponentPropsWithRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithRef<'button'>;

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithRef<'a'>;
const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === 'anchor') {
    return <a>Link</a>;
  }
  return <button {...props}>Click Me</button>;
};

export default Button;
