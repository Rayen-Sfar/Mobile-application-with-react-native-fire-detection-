// useWebSocket.js

import { useEffect } from 'react';

const useWebSocket = (url, onMessage) => {
  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      onMessage(message);
    };

    return () => ws.close();
  }, [url, onMessage]);
};

export default useWebSocket;
