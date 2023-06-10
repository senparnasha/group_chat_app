import React, { useEffect, useState } from "react";
import "./App.css";
import {  Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import AddMessage from "./component/AddMessage";
import db from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import facebookLogo from "./facebookLogo.png";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // first time load
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        // console.log("====", snapShot.docs[0].data())
        setMessages(
          snapShot.docs? snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() })):null
        );
      });
  }, []);

  useEffect(() => {
    //run code here
    setUsername(prompt("Enter your name"));
  }, []); //condition

  function sendMessage(event) {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: Date.now().toString(),
    });

    setInput(" ");
  }
  return (
    <>
      <div className="App">
        <img className="logostyle" src={facebookLogo} alt="facebookLogo" />
        <h1>Messenger App</h1>
        <h3>Welcome {username}</h3>
        <form className="app_form">
          <FormControl className="app_formControl">
           
            <Input className="app_input"
            placeholder="Enter a message..."
              value={input}
              style = {{width: 900}}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton className="app_iconButton"
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
        <FlipMove>
          {messages.length !=0? messages.map(({ id, message, timestamp }) => (
            <AddMessage key={id} username={username} message={message} />
          )): <></>}
        </FlipMove>
      </div>
    </>
  );
}

export default App;
