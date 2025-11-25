import Opportunities from "./Opportunities";
import QuickActions from "./QuickActions";
import SuggestedTracks from "./SuggestedTracks";
import UserInfoCard from "./UserInfoCard";

export default function MainContent({ data }: any) {
  return (
    <main className="flex-1 p-6 space-y-6">
      <UserInfoCard
        initials={data?.user?.name?.substring(0, 2)?.toUpperCase() || "--"}
        name={data?.user?.name || ""}
        course={data?.user?.course || "--"}
        completedCourses={data?.user?.completedCourses || "--"}
        studiedHours={data?.user?.studiedHours || "--"}
        level={data?.user?.level || "--"}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SuggestedTracks tracks={data.tracks} />
        <Opportunities items={data.opportunities} />
      </div>

      <QuickActions />
    </main>
  );
}
