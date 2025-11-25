import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(3333, () => console.log("🔥 Backend rodando na porta 3333"));
