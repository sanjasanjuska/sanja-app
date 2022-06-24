import "./Messages.css";
import React, { useEffect, useRef } from 'react';

const Messages = (props) => {

  const scrollDown = useRef(null);

  useEffect(() => {
    scrollDown.current?.scrollIntoView({ behaviour: "smooth" });
  }, [props]);

  const renderMessage = (message) => {
    const { member, data, id } = message;
    const messageFromMe = member.id === props.currentMember.id;
    const className = messageFromMe
      ? "messages--message currentMember"
      : "messages--message";


    return (

      <li className={className} key={id}>
        <div className="info--content">
          <span className="username">{member.clientData.username}</span>
          <div className="avatar" />
        </div>
        <div className="message--content" ref={scrollDown}>
          <p className="text">{data}</p>
        </div>
      </li>
    );
  };
  return (
    <div className="App-chat-page--messages-field">
      <ul className="messages--list">
        {props.messages.map((item) => renderMessage(item))}
      </ul>
    </div>
  );
};

export default Messages;