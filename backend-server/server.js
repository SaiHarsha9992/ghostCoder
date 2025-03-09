const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

// Enable CORS for frontend connection
app.use(cors({ origin: "http://localhost:3000" }));

const io = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Join room
  socket.on("joinRoom", ({ username, room, userImage }) => {
    socket.join(room);
    socket.username = username;
    socket.room = room;
    socket.userImage = userImage || "/ghost (6) (1).png"; // Default image

    io.to(room).emit("message", {
      username: "System",
      message: `${username} joined the room`,
      userImage: null, // System messages don't need an image
    });
  });

  // Chat messages
  socket.on("chatMessage", ({ room, username, message, userImage }) => {
    io.to(room).emit("message", {
      username,
      message,
      userImage: userImage || "/ghost (6) (1).png", // Fallback if no image
    });
  });

  // Leave room
  socket.on("leaveRoom", () => {
    if (socket.room) {
      io.to(socket.room).emit("message", {
        username: "System",
        message: `${socket.username} left the room`,
        userImage: null,
      });
      socket.leave(socket.room);
      socket.room = null;
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start WebSocket Server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO Server running on http://localhost:${PORT}`);
});
