import { useEffect, useState } from "react";
import { message } from "antd";
import { AIChatMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";
const chat = new ChatOpenAI({
  openAIApiKey: "",
  temperature: 0,
});

const fetchMessage = async (infoMessage: string) => {
  try {
    const res = await chat.call([new AIChatMessage(infoMessage)]);
    console.log("🚀 ~ file: index.tsx:15 ~ fetchMessage ~ res:", res);
    return { ...res };
  } catch (error: any) {
    message.error(error);
  }
};
export const useAIChatMessage = (info: string) => {
  useEffect(() => {
    if (info) {
      fetchMessage(info);
    }
  }, [info]);
};
