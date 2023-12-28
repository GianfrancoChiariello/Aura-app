import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';
import { useState } from 'react';

const MODEL_NAME = "gemini-pro";
const API_KEY = import.meta.env.VITE_API_KEY_PALM;

const usePaLM = () => {

    const [message, setMessage] = useState('')

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };
    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: "Eres un consultor de proyectos de software",
            },
            {
                role: "model",
                parts: "Okey, no hablare de otra cosa que no sea eso.",
            },
        ]
    });

    const sendMessage = async (message: string) => {
        const result = await chat.sendMessage(message);
        setMessage(result.response.text())
    }


    return { sendMessage, message }
}

export default usePaLM