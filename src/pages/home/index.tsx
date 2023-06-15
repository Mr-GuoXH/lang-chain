import { ChatOpenAI } from "langchain/chat_models/openai";
import { Input } from "antd";
import { AIChatMessage, HumanChatMessage } from "langchain/schema";
import { useEffect, useState } from "react";
import Header from "../Header";
import { useAIChatMessage } from "../../customHooks";
const Home = () => {
  const { input, setInput, fetchMessage } = useAIChatMessage();
  return (
    <div>
      <Input
        value={input}
        addonBefore="输入"
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => {
          console.log("?????", e.target.value);
          //   setMessage(e.target.value);
          fetchMessage(input);
        }}
      />
    </div>
  );
};

export default Home;
