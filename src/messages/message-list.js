import React, { Component } from 'react';

import MessageView from './message-view';

class MessageList extends Component {

  state = {
    message: {
        from: 'Martha',
        content: 'I will be travelling soon',
        status: 'read'
      }
  }

  render() {
    return(
      <div>
        <h1>List of Messages</h1>
        <MessageView message={this.state.message} />
      </div>
    )
  }
}

export default MessageList;
