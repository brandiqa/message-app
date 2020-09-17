import React, { Component } from 'react';

import MessageView from './message-view';

class MessageList extends Component {

  state = {
    messages:  [
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
    ]
  }

  render() {
    const messages  = this.state.messages.map((message, index) => {
      return(
        <MessageView key={index} message={message} />
      )
    })
    return (
      <div className="container">
        <h1>List of Messages</h1>
        {messages}
      </div>
    );
  }
}

export default MessageList;
