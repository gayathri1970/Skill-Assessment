// import express from "express";
// import taskRoutes from "./routes/taskRoutes.js";
// import errorHandler from "./middleware/errorHandler.js";
// const app = express();
// app.use(express.json());
// app.use("/api/tasks", taskRoutes);
// app.use(errorHandler);
// export default app;

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

export default app;
