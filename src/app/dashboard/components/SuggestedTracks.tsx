import { Map } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Track {
  title: string;
  category?: string;
  progress?: number;
}

interface SuggestedTracksProps {
  tracks: Track[];
}

export default function SuggestedTracks({ tracks = [] }: SuggestedTracksProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Titulo */}
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Map className="h-5 w-5 text-gray-700" />
        <span className="text-gray-700">Trilhas Sugeridas</span>
      </h2>

      <div className="space-y-6">
        {tracks.length === 0 ? (
          <p className="text-sm text-gray-500">
            Nenhuma trilha sugerida no momento.
          </p>
        ) : (
          tracks.map((track, i) => (
            <div key={i}>
              {/* título + categoria */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {track.title}
                </p>

                {track.category && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {track.category}
                  </span>
                )}
              </div>

              {/* progresso */}
              {track.progress !== undefined && (
                <>
                  <Progress value={track.progress} className="h-2 mt-2" />

                  <p className="text-xs text-gray-600 mt-1">
                    {track.progress}% concluído
                  </p>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
