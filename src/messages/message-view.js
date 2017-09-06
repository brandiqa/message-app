import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageView extends Component {
  render() {

    const message = this.props.message || {};

    return(
      <div className="container">
        <div className="from">
          <span className="label">From: </span>
          <span className="value">{message.from}</span>
        </div>
        <div className="status">
          <span className="label">Status: </span>
          <span className="value">{message.status}</span>
        </div>
        <div className="message">
          <span className="label">Message: </span>
          <span className="value">{message.content}</span>
        </div>
      </div>
    )
  }
}

MessageView.propTypes = {
  message: PropTypes.object.isRequired
}

export default MessageView;
