import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./styles/ChatArea.css";
import Message from "../components/Message";

function ChatArea() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    { username: "Dhiraj", text: "Hey Guy's" },
    { username: "Brinda", text: "Hi Dhiraj" },
    { username: "Vinod", text: "What's up my boy!" }
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your Name"));
  }, []);

  const handleMessage = event => {
    setInput(event.target.value);
  };

  const sendMessage = event => {
    event.preventDefault();
    setMessage([...messages, { username: username, text: input }]);
    setInput("");
  };
  // console.log(messages)

  return (
    <div className="chatArea">
      <div className="chatArea__nav">
        <div>Chat-Room-Name</div>
      </div>
      <div className="messages__area">
        <p>Welome {username}</p>

        {messages.map(message => (
          <Message username={username} message={message} />
        ))}
      </div>
      <div className="chatArea__inputArea">
        <form>
          <input
            className="chatArea__Input"
            placeholder="Type your message"
            onChange={handleMessage}
            value={input}
          />
          <Button
            type="submit"
            onClick={sendMessage}
            className="sendMessage"
            variant="contained"
            color="secondary"
          >
            Go
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ChatArea;
