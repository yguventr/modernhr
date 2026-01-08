import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || '';

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
  return client;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Sen uzman bir İnsan Kaynakları (HR) asistanısın. Adın 'Nexus AI'.
      Kullanıcılara şu konularda yardımcı olursun:
      - İş tanımları yazma (Job Descriptions)
      - Mülakat soruları hazırlama
      - İş Kanunu ve mevzuat hakkında genel bilgi verme (Türkiye odaklı)
      - Çalışan performansı geri bildirim metinleri oluşturma
      - İK metriklerini yorumlama
      
      Cevapların profesyonel, yapıcı ve Türkçe olmalı.`,
    },
  });
};

export const sendMessageToGemini = async (
  chat: Chat,
  message: string,
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};