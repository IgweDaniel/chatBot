import React from "react";
import ChatBot from "react-simple-chatbot";
import { steps } from "../steps";
export const ResturantChatBot = () => {
  return (
    <>
      <ChatBot steps={steps} />
    </>
  );
};
