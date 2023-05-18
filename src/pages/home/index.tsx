import { ChatOpenAI } from "langchain/chat_models/openai";
import { Input } from "antd";
import { AIChatMessage, HumanChatMessage } from "langchain/schema";
import { useEffect, useState } from "react";
const Home = () => {
  
  return (
    <div>
      <Input
        addonBefore="输入"
        onBlur={(e) => {
          console.log("?????", e.target.value);
          //   setMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
