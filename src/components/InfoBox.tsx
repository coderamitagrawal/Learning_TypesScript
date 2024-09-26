import React, { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  children: ReactNode;
}
const InfoBox = ({ mode, children }: InfoBoxProps) => {
  if (mode === 'hint') {
    return (
      <aside className="hint">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="warning">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
