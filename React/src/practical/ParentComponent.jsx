import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('Message From Parent');

  // Function to handle message from child
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h1>Message: {message}</h1>
      <ChildComponent onSendMessage={handleMessage} />
    </div>
  );
}

export default ParentComponent;