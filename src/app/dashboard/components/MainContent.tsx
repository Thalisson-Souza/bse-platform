import Opportunities from "./Opportunities";
import QuickActions from "./QuickActions";
import SuggestedTracks from "./SuggestedTracks";
import UserInfoCard from "./UserInfoCard";

export default function MainContent() {
  return (
    <main className="flex-1 p-6 space-y-6">
      <UserInfoCard />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SuggestedTracks tracks={[]} />

        <Opportunities items={[]} />
      </div>

      <QuickActions />
    </main>
  );
}
