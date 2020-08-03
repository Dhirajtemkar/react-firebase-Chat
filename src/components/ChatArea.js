import React, { useState, useEffect } from "react";
// import { Button } from "@material-ui/core";
import "./styles/ChatArea.css";
import Message from "../components/Message";
import Fire from "../Fire";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import FlipMove from "react-flip-move";

function ChatArea() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState("");
  const db = Fire.firestore();

  useEffect(() => {
    // run only once to initialize
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setMessage(
          snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your Name"));
  }, []);

  const handleMessage = event => {
    setInput(event.target.value);
  };

  const sendMessage = event => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
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
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
        </FlipMove>
      </div>
      <div className="chatArea__inputArea">
        <form>
          <input
            className="chatArea__Input"
            placeholder="Type your message"
            onChange={handleMessage}
            value={input}
          />
          <IconButton
            type="submit"
            onClick={sendMessage}
            className="sendMessage"
            variant="contained"
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default ChatArea;
