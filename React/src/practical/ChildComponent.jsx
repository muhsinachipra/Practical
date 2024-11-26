import React from 'react';

function ChildComponent({ onSendMessage }) {
  const sendMessageToParent = () => {
    // Call the function passed from parent with the message
    onSendMessage('Message From Child!');
  };

  return (
    <div>
      <button onClick={sendMessageToParent}>Send Message Button In Child</button>
    </div>
  );
}

export default ChildComponent;
