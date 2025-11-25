import { Request, Response } from "express";
import dashboardService from "./dashboard.service";

class DashboardController {
  async getDashboard(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      const data = await dashboardService.getDashboardData(userId);

      return res.json(data);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new DashboardController();
