import './App.css';
import MessageForm from './components/MessageForm';
import { useState } from "react";
import Message from './components/Message';

function App() {
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my chat App</h1>
        {messageObjects.map((messageObject, index) =>
          <Message
            key={index}
            message={messageObject.message}
          />
        )}
        <MessageForm onSendMessage={handleSendMessage} />
      </header>
    </div >
  );
}

export default App;
