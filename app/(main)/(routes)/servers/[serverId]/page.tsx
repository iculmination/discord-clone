import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: { some: { profileId: profile.id } },
    },
    include: {
      channels: { where: { name: "general" }, orderBy: { createdAt: "asc" } },
    },
  });

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return (
      <div className="text-rose-500 font-semibold">
        Error: General channel missing
      </div>
    );
  }

  return redirect(`/servers/${params?.serverId}/channels/${initialChannel.id}`);
};

export default ServerIdPage;
