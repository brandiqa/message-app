import React, { useState } from 'react';
import MessageView from './message-view';

export default function MessageList () {
  const initialValues = [
    {
      from: 'John',
      content: 'The event will start next week',
      status: false
    },
    {
      from: 'Martha',
      content: 'I will be travelling soon',
      status: true
    },
    {
      from: 'Jacob',
      content: 'Talk later. Have a great day!',
      status: true
    }
  ];

  const [messages] = useState(initialValues);

  const messageViews = messages.map((message, index) => {
    return(
      <MessageView key={index} message={message} />
    )
  })

  return (
    <div className="container">
      <h1>List of Messages</h1>
      {messageViews}
    </div>
  );
}
