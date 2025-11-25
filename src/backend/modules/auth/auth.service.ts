import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export class AuthService {
  async register(data: any) {
    const hashed = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashed,
      },
    });

    const { password, ...safeUser } = user;
    return safeUser;
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("Usuário não encontrado");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Senha incorreta");

    const { password: _ignored, ...safeUser } = user;
    return safeUser;
  }
}
