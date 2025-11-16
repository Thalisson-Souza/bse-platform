import SuggestedTracks from "./SuggestedTracks";
import UserInfoCard from "./UserInfoCard";

export default function MainContent() {
  return (
    <main className="flex-1 p-6">
      <UserInfoCard />
      <SuggestedTracks
        tracks={[
          { title: "Java Avançado", category: "Programação", progress: 84 },
          { title: "C++ Básico", category: "Programação", progress: 44 },
          { title: "HTML Avançado", category: "Programação", progress: 20 },
        ]}
      />
    </main>
  );
}
