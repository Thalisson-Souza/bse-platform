"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function ScheduleForm({ mentors }: any) {
  const [selectedMentor, setSelectedMentor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm space-y-6 max-w-xl">
      <div>
        <label className="font-medium">Mentor</label>
        <select
          className="mt-2 w-full border rounded-lg p-3 bg-gray-100"
          value={selectedMentor}
          onChange={(e) => setSelectedMentor(e.target.value)}
        >
          <option value="">Selecione um mentor</option>
          {mentors.map((m: any, i: number) => (
            <option key={i} value={m.name}>
              {m.name} — {m.nextAvailable}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-medium">Data</label>
        <div className="flex items-center gap-2 mt-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <input
            type="date"
            className="border rounded-lg p-2 bg-gray-100 flex-1"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="font-medium">Horário</label>
        <div className="flex items-center gap-2 mt-2">
          <Clock className="h-5 w-5 text-gray-500" />
          <input
            type="time"
            className="border rounded-lg p-2 bg-gray-100 flex-1"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg font-semibold">
        Confirmar Agendamento
      </button>
    </div>
  );
}
