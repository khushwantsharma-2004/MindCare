
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./routes/student.routes.js";
import counsellorRouter from "./routes/counsellor.routes.js";
import aiChatRouter from "./routes/aiChat.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import adminRouter from "./routes/admin.routes.js";
import videoRouter from "./routes/video.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://mindcare-frontend-cnh9.onrender.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/students", router);
app.use("/api/v1/counsellors", counsellorRouter);
app.use("/api/v1/chatbot", aiChatRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/videos", videoRouter);

export default app;
