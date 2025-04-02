import { useEffect, useState } from "react";

const useWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    const ws = new WebSocket("ws://localhost:8083/ws");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    ws.onmessage = (event) => {
      console.log("Received:", event.data);
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(ws);

    // Cleanup: đóng kết nối khi component unmount
    return () => {
      if (ws) ws.close();
    };
  }, []);

  // Hàm gửi thông báo qua WebSocket
  const sendNotification = (msg) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(msg);
    } else {
      console.error("WebSocket is not open. Ready state:", socket.readyState);
    }
  };

  return { messages, sendNotification };
};

export default useWebSocket;
