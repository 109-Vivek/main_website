import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      Main Website
      {JSON.stringify(session)}
    </div>
  );
}
