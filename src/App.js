import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/index";
import Messages from "./components/Message/index";
import InputElement from "./components/InputElement/index";

function App() {
  const [chatState, setChatState] = useState({
    messages: [],
    member: {
      username: "",
    },
  });

  const enterChat = (username) => {
    chatState.member = {
      username: username,
    };
    setChatState({ ...chatState }, chatState.member);

  };

  // connecting to a channel

  const [drone, setDrone] = useState(null);

  useEffect(() => {
    if (chatState.member.username !== "") {
      const drone = new window.Scaledrone("W3XIhisci8dy9MH3", {
        data: chatState.member,
      });
      setDrone(drone);
    }
  }, [chatState.member]);

  if (drone) {
    // a connection has been opened
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      chatState.member.id = drone.clientId;
      setChatState({ ...chatState }, chatState.member);

      const room = drone.subscribe("observable-room"); // observable rooms act like regular rooms but provide additional functionality for keeping track of connected members and linking messages to members

      room.on("message", (message) => {
        const { member, data, id, timestamp } = message;
        chatState.messages.push({ member, data, id, timestamp });
        setChatState({ ...chatState }, chatState.messages);
      });
    });
  }

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return chatState.member.username === "" ? (
    <Login enterChat={enterChat} />
  ) : (

    <div className="App-chat-page">
      <div className="message-container">
        <Messages
          messages={chatState.messages}
          currentMember={chatState.member}
        />
        <InputElement onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default App;
