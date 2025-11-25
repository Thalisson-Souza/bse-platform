import { prisma } from "../../lib/prisma";

class DashboardService {
  async getDashboardData(userId: number) {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    const tracks = await prisma.track.findMany({ where: { userId } });
    const opportunities = await prisma.opportunity.findMany({
      where: { userId },
    });
    const lessons = await prisma.lesson.findMany({ where: { userId } });

    return {
      user,
      tracks,
      opportunities,
      lessons,
    };
  }
}

export default new DashboardService();
