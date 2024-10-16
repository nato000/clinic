import { useState } from 'react';

const useTelegramHook = () => {
  // Get Env variables
  const botToken = process.env.REACT_APP_BOT_TOKEN;
  const chatId = process.env.REACT_APP_CHAT_ID;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendMessage = async (message) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setSuccess(true);
      } else {
        throw new Error(data.description || 'Failed to send message');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    loading,
    error,
    success,
  };
};

export default useTelegramHook;
