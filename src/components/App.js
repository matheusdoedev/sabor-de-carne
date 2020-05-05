import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      This is a sample stateful and server-side rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click it:
      <br />
      <br />
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}
