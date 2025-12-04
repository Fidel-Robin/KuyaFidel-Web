import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
// import { useEffect, useRef, useAutoScroll } from "react";
import "./ChatMessages.css";

function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return containerRef;
}

function ChatMessages({ chatMessages }) {
  //everytime chatMessages changes run useAutoScroll
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    //"ref={chatMessagesRef}" - this let react knows which element to auto scroll
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id, time }) => {
        return (
          <ChatMessage message={message} sender={sender} time={time} key={id} />
        );
      })}
    </div>
  );
}

export default ChatMessages;
