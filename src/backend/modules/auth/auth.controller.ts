import { AuthService } from "./auth.service";
import { RegisterSchema, LoginSchema } from "./auth.schema";
const authService = new AuthService();

export const AuthController = {
  register: async (req: any, res: any) => {
    try {
      const body = RegisterSchema.parse(req.body);
      const user = await authService.register(body);
      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },

  login: async (req: any, res: any) => {
    try {
      const body = LoginSchema.parse(req.body);
      const user = await authService.login(body.email, body.password);
      return res.json({ message: "Login efetuado", user });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },
};
