import { useMemo, useState } from "react";
import { message } from "antd";
import { AIChatMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";
const chat = new ChatOpenAI({
  openAIApiKey: "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",
  temperature: 0.5,
});

const fetchMessage = async (infoMessage?: string) => {
  try {
    if (!infoMessage) {
      return;
    }
    const res = await chat.call([new AIChatMessage(infoMessage)]);
    console.log("🚀 ~ file: index.tsx:15 ~ fetchMessage ~ res:", res);
    return { ...res };
  } catch (error: any) {
    message.error(error);
  }
};

interface AIChatParams {
  inputMsg: string;
}

export const useAIChatMessage = () => {
  const [input, setInput] = useState<string>();

  return useMemo(
    () => ({
      input,
      setInput,
      fetchMessage,
    }),
    [input]
  );
};
