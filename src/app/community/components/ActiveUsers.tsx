import { Users } from "lucide-react";

export default function ActiveUsers({ users }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
        <Users className="h-4 w-4" /> Usuários Ativos
      </h3>

      {users.length === 0 && (
        <p className="text-xs text-gray-400">Nenhum usuário ativo</p>
      )}

      <div className="space-y-3">
        {users.map((user: any, i: number) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-semibold">
              {user.initials}
            </div>

            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-400">{user.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
