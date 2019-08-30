import React from 'react';

interface IProps {
  children: React.ReactNode;
}

function App({ children }: IProps) {
  return <div>{children}</div>;
}

export default App;
