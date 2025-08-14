const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);
const allowedOrigins = [
  "https://ghost-coderr.vercel.app",
  "http://localhost:8080",
  "http://localhost:3000",
  "https://unicorn-secrets.lovable.app",
  "https://preview--unicorn-secrets.lovable.app"
];

// Enable CORS for Express
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  },
});

const users = {};

io.on("connection", (socket) => {
  console.log("New WS Connection:", socket.id);

  // ---- Store users in memory ----
  socket.on("joinRoom", ({ username, room, userImage }) => {
    socket.join(room);
    users[socket.id] = { username, room, userImage: userImage || "/ghost.png" };

    // Welcome to user
    socket.emit("message", {
      username: "Server",
      message: `Welcome to room ${room}, ${username}!`,
    });

    // Notify others
    socket.broadcast.to(room).emit("message", {
      username: "Server",
      message: `${username} has joined the chat`,
    });

    // ✅ Send updated members list
    const roomUsers = Object.values(users).filter((u) => u.room === room);
    io.to(room).emit("roomUsers", { room, users: roomUsers });
  });

  socket.on("chatMessage", ({ room, username, message, userImage }) => {
    io.to(room).emit("message", {
      username,
      message,
      userImage: userImage || "/ghost.png",
    });
  });

  socket.on("leaveRoom", () => {
    const user = users[socket.id];
    if (user) {
      const { room, username } = user;
      delete users[socket.id];
      socket.leave(room);

      io.to(room).emit("message", {
        username: "Server",
        message: `${username} has left the chat`,
      });

      // ✅ Update members list
      const roomUsers = Object.values(users).filter((u) => u.room === room);
      io.to(room).emit("roomUsers", { room, users: roomUsers });
    }
  });

  socket.on("disconnect", () => {
    const user = users[socket.id];
    if (user) {
      const { room, username } = user;
      delete users[socket.id];

      io.to(room).emit("message", {
        username: "Server",
        message: `${username} has disconnected`,
      });

      // ✅ Update members list
      const roomUsers = Object.values(users).filter((u) => u.room === room);
      io.to(room).emit("roomUsers", { room, users: roomUsers });
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start WebSocket Server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Socket.IO Server running on http://localhost:${PORT}`);
});



