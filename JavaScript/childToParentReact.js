// import React, { useState } from 'react';
// import ChildComponent from './ChildComponent';

// function ParentComponent() {
//   const [message, setMessage] = useState('');

//   // Function to handle message from child
//   const handleMessage = (msg) => {
//     setMessage(msg);
//   };

//   return (
//     <div>
//       <h1>Message from Child: {message}</h1>
//       <ChildComponent onSendMessage={handleMessage} />
//     </div>
//   );
// }

// export default ParentComponent;


// import React from 'react';

// function ChildComponent({ onSendMessage }) {
//   const sendMessageToParent = () => {
//     // Call the function passed from parent with the message
//     onSendMessage('Hello from Child!');
//   };

//   return (
//     <div>
//       <button onClick={sendMessageToParent}>Send Message</button>
//     </div>
//   );
// }

// export default ChildComponent;
