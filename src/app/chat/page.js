"use client";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChatPage() {
  const { data: session } = useSession();
  const [socket, setSocket] = useState(null);
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const newSocket = io("https://ghostcoder-nlqv.onrender.com");

    newSocket.on("connect", () => {
      console.log("Connected:", newSocket.id);
      setSocket(newSocket);
    });

    newSocket.on("message", (msg) => {
      console.log("New Message:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected");
      setSocket(null);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const joinRoom = () => {
    if (!socket) {
      console.error("Socket is not connected.");
      return;
    }
    if (room && session?.user?.name && session?.user?.image) {
      socket.emit("joinRoom",{ username: session.user.name, room, userImage: session.user.image });
      setJoined(true);
    } else {
      alert("Please enter a room and ensure you're logged in.");
    }
  };

  const leaveRoom = () => {
    if (!socket) {
      console.error("Socket is not connected.");
      return;
    }
    socket.emit("leaveRoom");
    setJoined(false);
    setRoom("");
    setMessages([]);
  };

  const sendMessage = () => {
    if (!socket || !message.trim()) return;

    const msgData = {
      room,
      username: session?.user?.name,
      message,
    };

    console.log("Sending Message:", msgData); // Debugging
    socket.emit("chatMessage", msgData);
    setMessage("");
  };

  return (
    <>
      <Header />
      <div className="bg-[#2a3d41] text-white min-h-screen flex items-center justify-center ">
        <div className="w-full max-w-3xl mx-auto p-6 bg-[#1a2629] rounded-xl shadow-lg">
          {!joined ? (
            <div className="flex flex-col gap-4">
              <Image
                src="/ghost (5) (1).png"
                width={50} // Smaller on small screens
                height={50} // Smaller on small screens
                alt="Ghost Image"
                className="sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-28 lg:h-28 mx-auto"
              />
              <p className="text-sm text-gray-300">
                Note: Please use these chat rooms for effective communication.
                Avoid using inappropriate language.
              </p>
              <input
                type="text"
                placeholder="Enter room number"
                className="p-2 border text-black rounded bg-gray-400 placeholder-gray-900"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && joinRoom()}
              />
              <button
                onClick={joinRoom}
                className="bg-white hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] text-black p-2 rounded"
              >
                Join Room
              </button>
            </div>
          ) : (
            <div>
              <Image
                src="/ghost (5) (1).png"
                width={50} // Smaller on small screens
                height={50} // Smaller on small screens
                alt="Ghost Image"
                className="sm:w-10 sm:h-10 md:w-18 md:h-18 lg:w-28 lg:h-28 mx-auto"
              />
              <h2 className="text-xl font-bold text-center mb-4">
                Chat Room: {room}
              </h2>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-2 border border-gray-700 rounded-md mb-4">
                {messages.map((msg, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    
                    <strong>{msg.username}:</strong>
                    <span>{msg.message}</span>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2 flex-col sm:flex-row">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-grow p-2 border border-gray-600 bg-[#1a2629] text-white focus:ring-2 focus:ring-white rounded"
                  placeholder="Type a message..."
                  rows={2}
                />
                <button
                  onClick={sendMessage}
                  className="p-2 bg-white text-black rounded hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"
                >
                  Send
                </button>
                <button
                  onClick={leaveRoom}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Leave Room
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
