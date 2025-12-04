import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages.jsx";
import "./App.css"; //loading css file

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [
      {
        message: "hello chatbot",
        sender: "user",
        id: "id1",
        time: 1736127288920,
      },
      {
        message: "Hello! How can I help you?",
        sender: "robot",
        id: "id2",
        time: 1736127291230,
      },
      {
        message: "can you get me todays date?",
        sender: "user",
        id: "id3",
        time: 1736127385356,
      },
      {
        message: "Today is September 27",
        sender: "robot",
        id: "id4",
        time: 1736127385500,
      },
    ]
  );

  useEffect(() => {
    Chatbot.addResponses({
      "good bye": "Goodbye. Have a great day! Youre Charitoo",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });

    // [] tells useEffect to only run once. We only want to run
    // this setup code once because we only want to add these
    // extra responses once.
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  });

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
